"use server";
export async function getAllUpcomingAppointmentsTimes({ supabase, user }: any) {
  if (user) {
    // Select both date and time columns for appointments with "Upcoming" status
    const { data: upcomingAppointments, error } = await supabase
      .from("appointments")
      .select("date, time") // Select both the date and time columns
      .eq("status", "Upcoming");

    console.log("from server", upcomingAppointments);

    if (error) {
      console.error("Error fetching upcoming appointments:", error);
      return []; // Return an empty array or handle the error as needed
    }

    // Convert time to 12-hour format and organize by date
    const appointmentsByDate = upcomingAppointments.reduce(
      (acc: any, { date, time }: any) => {
        const formattedTime = convertTo12HourFormat(time); // Use the existing function
        if (!acc[date]) {
          acc[date] = [formattedTime];
        } else {
          acc[date].push(formattedTime);
        }
        return acc;
      },
      {}
    );
    console.log("appointments by date", appointmentsByDate);
    return appointmentsByDate;
  } else {
    console.log("User not authenticated.");
    return {}; // Ensure consistent return type or handle unauthenticated users as needed
  }
}

// Function to convert 24-hour time to 12-hour format with AM/PM
const convertTo12HourFormat = (time: any) => {
  const [hours, minutes] = time.split(":");
  const hour = parseInt(hours, 10);
  const isPM = hour >= 12;
  const convertedHour = hour % 12 || 12;
  return `${convertedHour}:${minutes.substring(0, 2)} ${isPM ? "PM" : "AM"}`;
};
