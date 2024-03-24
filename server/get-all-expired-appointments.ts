"use server";

export async function getAllExpiredAppointments({ supabase, user }: any) {
  if (!user) {
    console.log("User is not authenticated.");
    return { message: "you don't have any past appointment" };
  }

  const { data: AllExpiredAppointments, error } = await supabase
    .from("appointments")
    .select("id ,date, time, extra_note, status, inserted_at, updated_at")
    .in("status", ["Passed", "Cancelled"]) // Query for statuses "Passed" and "Cancelled"
    .eq("user_id", user.id) // Ensure the appointments belong to the authenticated user
    .order("inserted_at", { ascending: false }); // Optional: order by inserted_at date
  console.log("expired data from server", AllExpiredAppointments);
  if (error) {
    console.error("Error fetching expired appointments:", error);
    return {
      message: "Sorry, something went wrong while fetching your history",
    };
  }

  if (AllExpiredAppointments.length === 0) {
    // If no appointments found
    return { message: `You don't have any past appoinment ${user.name}` };
  }

  // Return the fetched appointments
  return AllExpiredAppointments;
}
