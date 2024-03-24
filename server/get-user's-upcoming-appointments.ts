// export async function getUserUpcomingAppointments({ supabase, user }: any) {
//   if (!user) {
//     return { message: "you don't have any " };
//   }
//   const { data: profileData, error: profileError } = await supabase
//     .from("profile")
//     .select("*")
//     .eq("user_id", user.id)
//     .limit(1)
//     .maybeSingle();
//   console.log("profile data", profileData);

//   if (profileError) {
//     console.error("Error when getting user's profile:", profileError);
//   }

//   if (profileData) {
//     const { data: userAppointment, error: userAppointmentError } =
//       await supabase
//         .from("appointments")
//         .select("*")
//         .eq("user_id", user.id)
//         .eq("status", "Upcoming")
//         .limit(1)
//         .maybeSingle();

//     if (userAppointment) {
//       console.log("upcoming appointments of user", userAppointment);
//       return userAppointment;
//     } else {
//       console.log("problem to get userAppointment");
//     }

//     if (userAppointmentError) {
//       console.error(
//         "Error when getting user's appointments:",
//         userAppointmentError
//       );
//       return { message: " sorry somthing went wrong" };
//     }
//   } else {
//     return { message: "you don't have any bookings" };
//   }

//   // Select both date and time columns for appointments with "Upcoming" status
// }
"use server";

export async function getUserUpcomingAppointments({ supabase, user }: any) {
  if (!user) {
    return { message: "You are not authenticated." };
  }

  const { data: profileData, error: profileError } = await supabase
    .from("profile")
    .select("name, phone_number")
    .eq("user_id", user.id)
    .limit(1)
    .maybeSingle();

  if (profileError) {
    console.error("Error when getting user's profile:", profileError);
    return {
      message: "Sorry, something went wrong while fetching your profile",
    };
  }

  if (profileData) {
    const { data: userAppointment, error: userAppointmentError } =
      await supabase
        .from("appointments")
        .select("id, date, time, extra_note, inserted_at")
        .eq("user_id", user.id)
        .eq("status", "Upcoming")
        .limit(1)
        .maybeSingle();

    if (userAppointmentError) {
      console.error("Error when getting user's appointments:", profileError);
      return {
        message: "Sorry, something went wrong while fetching your recipt.",
      };
    }
    if (userAppointment) {
      // Formatting the inserted_at to exclude the timezone
      const formattedInsertedAt = userAppointment.inserted_at
        ? userAppointment.inserted_at.split("T")[0]
        : "";

      // Constructing the object to return
      const receiptDetails = {
        userName: profileData.name,
        userPhoneNumber: profileData.phone_number,
        id: userAppointment.id,
        bookingDate: formattedInsertedAt,
        date: userAppointment.date,
        time: userAppointment.time,
        extraNote: userAppointment.extra_note || "N/A",
      };

      return receiptDetails;
    } else {
      return {
        message: `you don't have any upcoming appoinments ${profileData.name}`,
      };
    }
  } else {
    return {
      message: `you don't have any upcoming appoinments `,
    };
  }
}
