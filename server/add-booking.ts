"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import https from "https";

export async function addBooking({
  date,
  time,
  extraNote,
  phoneNumber,
  name,
}: any) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { message: "User is not authenticated." };
  }

  // Fetch profile
  const { data: profileData, error: profileError } = await supabase
    .from("profile")
    .select("*")
    .eq("user_id", user.id)
    .limit(1)
    .maybeSingle();

  if (profileError) {
    console.error("Error fetching profile:", profileError);
  }

  // If no profile exists, create one
  if (profileData === null && profileError === null) {
    const { error: profileInsertError } = await supabase
      .from("profile")
      .insert([
        {
          name,
          phone_number: phoneNumber,
          user_id: user.id,
        },
      ]);

    if (profileInsertError) {
      console.error("Error when creating profile", profileInsertError);
      return { message: "Failed to create profile." };
    }
  }

  // Check for existing appointment
  const { data: appointmentData, error: appointmentError } = await supabase
    .from("appointments")
    .select("*")
    .eq("user_id", user.id)
    .eq("status", "Upcoming")
    .limit(1)
    .maybeSingle();

  if (appointmentError) {
    console.error("Error checking appointments:", appointmentError);
  }

  // If there's no upcoming appointment, proceed to book a new one
  if (!appointmentData) {
    const { error } = await supabase.from("appointments").insert([
      {
        date,
        time,
        extra_note: extraNote,
        user_id: user.id,
      },
    ]);

    if (error) {
      console.error("Error when creating appointment", error);
      return { message: "Failed to book appointment." };
    }

    // Send Telegram message after successfully creating the appointment
    const message = `New appointment booked!\nName: ${name}\nPhone: ${phoneNumber}\nDate: ${date}\nTime: ${time}\nNote: ${extraNote}`;
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
          console.log("Message sent to Telegram successfully:", data);
        });
      })
      .on("error", (error) => {
        console.error("Failed to send message to Telegram:", error.message);
        // Handle the error as needed
      });
    // Assuming revalidatePath is correctly defined elsewhere
    revalidatePath("/", "layout");
    return { message: "Appointment successfully booked." };
  } else {
    return { message: "You already have an upcoming appointment." };
  }
}
