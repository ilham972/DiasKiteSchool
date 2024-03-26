// // // // utils/telegram.ts

// // // import axios from "axios";

// // // interface TelegramResponse {
// // //   success: boolean;
// // //   data?: any;
// // //   error?: string;
// // // }

// // // export const sendTelegramMessage = async (
// // //   message: string
// // // ): Promise<TelegramResponse> => {
// // //   const botToken = process.env.TELEGRAM_BOT_TOKEN;
// // //   const chatId = process.env.TELEGRAM_CHAT_ID; // Group chat ID
// // //   const text = encodeURIComponent(message);

// // //   const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}`;

// // //     try {
// // //       const response = await axios.get(url);
// // //       console.log(response.data);
// // //       return { success: true, data: response.data };
// // //     } catch (error: unknown) {
// // //       if (axios.isAxiosError(error)) {
// // //         // Handling Axios errors specifically
// // //         console.error(
// // //           "Axios error sending message to Telegram:",
// // //           error?.response?.data || error.message
// // //         );
// // //         return { success: false, error: error?.response?.data || error.message };
// // //       } else if (error instanceof Error) {
// // //         // Handling generic JS Error
// // //         console.error("Error sending message to Telegram:", error.message);
// // //         return { success: false, error: error.message };
// // //       }
// // //       // Fallback error handling
// // //       return { success: false, error: "An unknown error occurred" };
// // //     }
// // //   };

// // //   // utils/telegram.ts

// // // //   try {
// // // //     const response = await axios.get(url);
// // // //     console.log("Telegram response:", response.data);
// // // //     return { success: true, data: response.data };
// // // //   } catch (error) {
// // // //     if (axios.isAxiosError(error)) {
// // // //       console.error(
// // // //         "Axios error sending message to Telegram:",
// // // //         error.response?.data || error.message
// // // //       );
// // // //     } else {
// // // //       console.error("Error sending message to Telegram:", error);
// // // //     }
// // // //     return { success: false, error: "Failed to send Telegram message" };
// // // //   }
// // // // };

// // import axios from "axios";

// // export const sendTelegramMessage = async (message: string) => {
// //   // Hardcoded values for testing
// //   const botToken = "6361274176:AAGjzOGF5aMZwtlFE0i6XLA7SGXKT-LxRmQ";
// //   const chatId = "-4182211708"; // Make sure this is the correct chat ID
// //   const text = encodeURIComponent(message);

// //   const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

// //   try {
// //     // Using POST method
// //     const response = await axios.post(url, {
// //       chat_id: chatId,
// //       text: message, // No need to URL encode when using POST
// //     });

// //     console.log("Success! Message sent to Telegram:", response.data);
// //     return { success: true, data: response.data };
// //   } catch (error) {
// //     if (axios.isAxiosError(error)) {
// //       console.error(
// //         "Axios error sending message to Telegram:",
// //         error.response?.data || error.message
// //       );
// //       return {
// //         success: false,
// //         error: error.response?.data?.description || error.message,
// //       };
// //     } else {
// //       console.error("Unknown error sending message to Telegram:", error);
// //       return { success: false, error: "An unknown error occurred." };
// //     }
// //   }
// // };

// // This example assumes you're placing this inside an API route in Next.js
// // or a server-side function where environment variables are accessible.

// async function sendTelegramMessage(message: string) {
//   const botToken = process.env.TELEGRAM_BOT_TOKEN;
//   const chatId = process.env.TELEGRAM_CHAT_ID;
//   const encodedMessage = encodeURIComponent(message);

//   const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodedMessage}`;

//   try {
//     const response = await fetch(url, { method: "GET" });
//     const data = await response.json();
//     console.log("Message sent successfully:", data);
//     return { success: true, data };
//   } catch (error) {
//     console.error("Error sending message to Telegram:", error);
//     return { success: false, error: "Failed to send message" };
//   }
// }

// // Example usage
// async function handleSendMessage(req: any, res: any) {
//   // Example message
//   const message = "Hello from the server side!";
//   const result = await sendTelegramMessage(message);

//   if (result.success) {
//     res.status(200).json({ message: "Message sent successfully" });
//   } else {
//     res.status(500).json({ error: result.error });
//   }
// }

// export default handleSendMessage;
