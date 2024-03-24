"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import https from "https";

export default async function cancelAppointment({
  user,
  userUpcomingAppointments,
}: any) {
  const supabase = createClient();

  if (!user) {
    console.log("User is not authenticated.");
    return { message: "You are not authenticated." };
  }

  if (userUpcomingAppointments) {
    const { error } = await supabase
      .from("appointments")
      .update({ status: "Cancelled" })
      .match({ id: userUpcomingAppointments.id });

    if (error) {
      console.error("Error cancelling the appointment:", error);
      return {
        message:
          "Sorry, something went wrong while cancelling your appointment.",
      };
    }

    const message = `Appointment cancelled!\nName: ${userUpcomingAppointments.userName}\nPhone: ${userUpcomingAppointments.userPhoneNumber}\nDate: ${userUpcomingAppointments.date}\nTime: ${userUpcomingAppointments.time}\nNote: ${userUpcomingAppointments.extraNote}`;
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const sendMessageUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
      message
    )}`;

    https
      .get(sendMessageUrl, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          console.log(
            "Cancellation message sent to Telegram successfully:",
            data
          );
        });
      })
      .on("error", (err) => {
        console.error(
          "Failed to send cancellation message to Telegram:",
          err.message
        );
      });

    revalidatePath("/");
    return { message: "Your appointment has been successfully cancelled" };
  } else {
    return {
      message: "you don't have any appointments to cancell",
    };
  }

  // const { data, error } = await supabase
  //   .from("appointments")
  //   .update({ status: "Cancelled" })
  //   .eq("user_id", user.id)
  //   .eq("status", "Upcoming")
  //   .maybeSingle();

  // console.log(data);
}
