// import React from "react";

// const Receipt = ({ userUpcomingAppointments = {} }: any) => {
//   // Format the inserted_at date to exclude the time zone and time
//   const formattedInsertedAt = userUpcomingAppointments.inserted_at
//     ? userUpcomingAppointments.inserted_at.split("T")[0]
//     : "";

//   return (
//     <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-lg">
//       <div className="p-5">
//         <h2 className="text-xl font-bold text-gray-800 mb-4">
//           Appointment Receipt
//         </h2>
//         <div className="bg-gray-100 p-4 rounded-lg">
//           <p className="font-semibold text-gray-700">
//             Appointment ID:{" "}
//             <span className="font-normal">{userUpcomingAppointments.id}</span>
//           </p>
//           <p className="font-semibold text-gray-700">
//             Date:{" "}
//             <span className="font-normal">{userUpcomingAppointments.date}</span>
//           </p>
//           <p className="font-semibold text-gray-700">
//             Time:{" "}
//             <span className="font-normal">{userUpcomingAppointments.time}</span>
//           </p>
//           <p className="font-semibold text-gray-700">
//             Note:{" "}
//             <span className="font-normal">
//               {userUpcomingAppointments.extra_note || "N/A"}
//             </span>
//           </p>
//           <p className="font-semibold text-gray-700">
//             Booking Date:{" "}
//             <span className="font-normal">{formattedInsertedAt}</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// "use client";

// import React from "react";
// import { Button } from "../ui/button";
// import { toast } from "sonner";
// import cancelAppointment from "@/server/cancel-appointment";

// const Receipt = ({ userUpcomingAppointments = {}, user }: any) => {
//   // Directly check if there's a message key in the userUpcomingAppointments object

//   const appointmentId = userUpcomingAppointments.id;
//   console.log("appointment Id", appointmentId);

//   console.log("from receipt", userUpcomingAppointments);
//   if (userUpcomingAppointments.message) {
//     return (
//       <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-lg p-5">
//         <p className="text-gray-800">{userUpcomingAppointments.message}</p>
//       </div>
//     );
//   }

//   // Check if the object is empty, indicating no receipt details are available
//   if (Object.keys(userUpcomingAppointments).length === 0) {
//     return (
//       <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-lg p-5">
//         <p className="text-gray-800">Receipt details not available.</p>
//       </div>
//     );
//   }

//   async function handleOnClick() {
//     if (user && appointmentId) {
//       toast("please wait...", {
//         position: "top-center",
//       });
//       const cancelAppointmentMessage = await cancelAppointment({ user });
//       if (cancelAppointmentMessage) {
//         toast(cancelAppointmentMessage.message, {
//           position: "top-center",
//         });
//       } else {
//         toast(
//           "sorry something went wrong, your appointment was not cancelled", // corrected spelling of "something"
//           {
//             position: "top-center",
//           }
//         );
//       }
//     } else {
//       toast("you don't have an upcoming appointment ", {
//         position: "top-center",
//       });
//     }
//   }

//   return (
//     <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-lg">
//       <div className="p-5">
//         <h2 className="text-xl font-bold text-gray-800 mb-4"></h2>
//         <div className="bg-gray-100 p-4 rounded-lg  ">
//           {/* Directly map through userUpcomingAppointments */}
//           {Object.entries(userUpcomingAppointments).map(([key, value]: any) => (
//             <p className="font-medium text-gray-700 " key={key}>
//               {key
//                 .replace(/([A-Z])/g, " $1")
//                 .trim()
//                 .replace(/extraNote/, "extra note")
//                 .replace(/bookingDate/, "booking date")
//                 .replace(/userName/, "user name")
//                 .replace(/userPhoneNumber/, "user phone number")}
//               :{" "}
//               <span className="font-normal">
//                 {typeof value === "number" ? value : value.toString()}
//               </span>
//             </p>
//           ))}
//         </div>
//         <Button
//           variant="outline"
//           className="w-full mt-3"
//           onClick={handleOnClick}
//         >
//           Cancel
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Receipt;

// "use client";

// import React from "react";
// import { Button } from "../ui/button";
// import { toast } from "sonner";
// import cancelAppointment from "@/server/cancel-appointment";

// const Receipt = ({ userUpcomingAppointments = {}, user }: any) => {
//   const appointmentId = userUpcomingAppointments.id;
//   console.log("appointment Id", appointmentId);

//   console.log("from receipt", userUpcomingAppointments);

//   if (userUpcomingAppointments.message) {
//     return (
//       <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-lg p-5 text-center">
//         <p className="text-gray-800">{userUpcomingAppointments.message}</p>
//       </div>
//     );
//   }

//   if (Object.keys(userUpcomingAppointments).length === 0) {
//     return (
//       <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-lg p-5 text-center">
//         <p className="text-gray-800">Receipt details not available.</p>
//       </div>
//     );
//   }

//   async function handleOnClick() {
//     if (user && appointmentId) {
//       toast("please wait...", {
//         position: "top-center",
//       });
//       const cancelAppointmentMessage = await cancelAppointment({ user });
//       if (cancelAppointmentMessage) {
//         toast(cancelAppointmentMessage.message, {
//           position: "top-center",
//         });
//       } else {
//         toast(
//           "Sorry, something went wrong. Your appointment was not cancelled",
//           {
//             position: "top-center",
//           }
//         );
//       }
//     } else {
//       toast("You don't have an upcoming appointment", {
//         position: "top-center",
//       });
//     }
//   }

//   return (
//     <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-lg">
//       <div className="p-5">
//         <div className="bg-gray-100 p-4 rounded-lg">
//           {Object.entries(userUpcomingAppointments).map(([key, value]: any) => (
//             <div
//               className="flex justify-between items-center text-left gap-2 text-sm my-2"
//               key={key}
//             >
//               <dt className="font-medium text-gray-700 w-[50%]">
//                 {key
//                   .replace(/([A-Z])/g, " $1")
//                   .trim()
//                   .replace(/extraNote/, "Extra note")
//                   .replace(/bookingDate/, "Booking date")
//                   .replace(/userName/, "User name")
//                   .replace(/userPhoneNumber/, "User phone number")}
//               </dt>
//               <dd className="font-normal  text-gray-700 w-[50%] text-left pl-5">
//                 {typeof value === "number" ? value : value.toString()}
//               </dd>
//             </div>
//           ))}
//         </div>
//         <Button
//           variant="outline"
//           className="w-full mt-3"
//           onClick={handleOnClick}
//         >
//           Cancel
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Receipt;

"use client";

// import React from "react";
// import { Button } from "../ui/button";
// import { toast } from "sonner";
// import cancelAppointment from "@/server/cancel-appointment";

// const Receipt = ({ userUpcomingAppointments = {}, user }: any) => {
//   // Mapping key names to more descriptive labels
//   const keyMap = {
//     id: "Appointment ID",
//     name: "Name",
//     phoneNumber: "Phone Number",
//     bookingDate: "Booking Date",
//     bookingTime: "Booking Time",
//     note: "Note",
//     // Add any additional keys here with their descriptive labels
//   };

//   const appointmentId = userUpcomingAppointments.id;

//   if (userUpcomingAppointments.message) {
//     return (
//       <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-lg p-5 text-center">
//         <p className="text-gray-800">{userUpcomingAppointments.message}</p>
//       </div>
//     );
//   }

//   if (Object.keys(userUpcomingAppointments).length === 0) {
//     return (
//       <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-lg p-5 text-center">
//         <p className="text-gray-800">Receipt details not available.</p>
//       </div>
//     );
//   }

//   async function handleOnClick() {
//     if (user && appointmentId) {
//       toast("Please wait...", {
//         position: "top-center",
//       });
//       const cancelAppointmentMessage = await cancelAppointment({
//         user,
//         appointmentId,
//       });
//       if (cancelAppointmentMessage) {
//         toast(cancelAppointmentMessage.message, {
//           position: "top-center",
//         });
//       } else {
//         toast(
//           "Sorry, something went wrong. Your appointment was not cancelled",
//           {
//             position: "top-center",
//           }
//         );
//       }
//     } else {
//       toast("You don't have an upcoming appointment", {
//         position: "top-center",
//       });
//     }
//   }

//   return (
//     <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-lg">
//       <div className="p-5">
//         <div className="bg-gray-100 p-4 rounded-lg">
//           {/* Mapping through userUpcomingAppointments using the keyMap for labels */}
//           {Object.entries(userUpcomingAppointments).map(([key, value]: any) => {
//             const label = keyMap[key] || key; // Use mapped label or key as fallback
//             return (
//               <div
//                 className="flex justify-between items-center gap-2 text-sm my-2"
//                 key={key}
//               >
//                 <dt className="font-medium text-gray-700 w-[50%]">{label}</dt>
//                 <dd className="font-normal text-gray-700 w-[50%] text-right">
//                   {typeof value === "number" ? value : value.toString()}
//                 </dd>
//               </div>
//             );
//           })}
//         </div>
//         <Button
//           variant="outline"
//           className="w-full mt-3"
//           onClick={handleOnClick}
//         >
//           Cancel
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Receipt;

// "use client";

// import React from "react";
// import { Button } from "../ui/button";
// import { toast } from "sonner";
// import cancelAppointment from "@/server/cancel-appointment";

// // Define a type for the userUpcomingAppointments props
// interface AppointmentDetails {
//   id?: string;
//   name?: string;
//   phoneNumber?: string;
//   bookingDate?: string;
//   bookingTime?: string;
//   note?: string;
//   [key: string]: string | undefined; // This allows for additional, unspecified string keys
// }

// // Adjust the keyMap with a specific type to ensure TypeScript understands the indexing
// const keyMap: { [K in keyof AppointmentDetails]: string } = {
//   id: "Appointment ID",
//   name: "Name",
//   phoneNumber: "Phone Number",
//   bookingDate: "Booking Date",
//   bookingTime: "Booking Time",
//   note: "Note",
// };

// const Receipt = ({
//   userUpcomingAppointments = {},
//   user,
// }: {
//   userUpcomingAppointments: AppointmentDetails;
//   user: any;
// }) => {
//   const appointmentId = userUpcomingAppointments.id;

//   if (userUpcomingAppointments.message) {
//     return (
//       <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-lg p-5 text-center">
//         <p className="text-gray-800">{userUpcomingAppointments.message}</p>
//       </div>
//     );
//   }

//   if (Object.keys(userUpcomingAppointments).length === 0) {
//     return (
//       <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-lg p-5 text-center">
//         <p className="text-gray-800">Receipt details not available.</p>
//       </div>
//     );
//   }

//   async function handleOnClick() {
//     if (user && appointmentId) {
//       toast("Please wait...", {
//         position: "top-center",
//       });
//       const cancelAppointmentMessage = await cancelAppointment({
//         user,
//         appointmentId,
//       });
//       if (cancelAppointmentMessage) {
//         toast(cancelAppointmentMessage.message, {
//           position: "top-center",
//         });
//       } else {
//         toast(
//           "Sorry, something went wrong. Your appointment was not cancelled",
//           {
//             position: "top-center",
//           }
//         );
//       }
//     } else {
//       toast("You don't have an upcoming appointment", {
//         position: "top-center",
//       });
//     }
//   }

//   return (
//     <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-lg">
//       <div className="p-5">
//         <div className="bg-gray-100 p-4 rounded-lg">
//           {Object.entries(userUpcomingAppointments).map(([key, value]) => {
//             // Ensure the key exists in keyMap and value is not undefined before rendering
//             if (key in keyMap && value) {
//               const label = keyMap[key as keyof AppointmentDetails];
//               return (
//                 <div
//                   className="flex justify-between items-center gap-2 text-sm my-2"
//                   key={key}
//                 >
//                   <dt className="font-medium text-gray-700 w-[50%]">{label}</dt>
//                   <dd className="font-normal text-gray-700 w-[50%] text-right">
//                     {typeof value === "number" ? value : value.toString()}
//                   </dd>
//                 </div>
//               );
//             }
//             return null; // In case the key is not found in keyMap, don't render anything
//           })}
//         </div>
//         <Button
//           variant="outline"
//           className="w-full mt-3"
//           onClick={handleOnClick}
//         >
//           Cancel
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Receipt;

// "use client";
// import React from "react";
// import { Button } from "../ui/button";
// import { toast } from "sonner";
// import cancelAppointment from "@/server/cancel-appointment";

// interface AppointmentDetails {
//   id?: string;
//   name?: string;
//   phoneNumber?: string;
//   bookingDate?: string;
//   bookingTime?: string;
//   note?: string;
//   [key: string]: string | undefined;
// }

// const keyMap: { [K in keyof AppointmentDetails]: string } = {
//   id: "Appointment ID",
//   name: "Name",
//   phoneNumber: "Phone Number",
//   bookingDate: "Booking Date",
//   bookingTime: "Booking Time",
//   note: "Note",
// };

// const Receipt = ({
//   userUpcomingAppointments = {},
//   user,
// }: {
//   userUpcomingAppointments: AppointmentDetails;
//   user: any;
// }) => {
//   const appointmentId = userUpcomingAppointments.id;

//   console.log("User upcoming appointments:", userUpcomingAppointments); // Debugging line
//   if (userUpcomingAppointments.message) {
//     return (
//       <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-lg p-5 text-center">
//         <p className="text-gray-800">{userUpcomingAppointments.message}</p>
//       </div>
//     );
//   }

//   if (Object.keys(userUpcomingAppointments).length === 0) {
//     return (
//       <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-lg p-5 text-center">
//         <p className="text-gray-800">Receipt details not available.</p>
//       </div>
//     );
//   }

//   async function handleOnClick() {
//     if (user && appointmentId) {
//       toast("Please wait...", {
//         position: "top-center",
//       });
//       const cancelAppointmentMessage = await cancelAppointment({
//         user,
//         appointmentId,
//       });
//       if (cancelAppointmentMessage) {
//         toast(cancelAppointmentMessage.message, {
//           position: "top-center",
//         });
//       } else {
//         toast(
//           "Sorry, something went wrong. Your appointment was not cancelled",
//           {
//             position: "top-center",
//           }
//         );
//       }
//     } else {
//       toast("You don't have an upcoming appointment", {
//         position: "top-center",
//       });
//     }
//   }

//   return (
//     <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-lg">
//       <div className="p-5">
//         <div className="bg-gray-100 p-4 rounded-lg">
//           {Object.entries(userUpcomingAppointments).map(([key, value]) => {
//             if (key in keyMap && value) {
//               const label = keyMap[key as keyof AppointmentDetails];
//               console.log(`Rendering: ${label} - ${value}`); // Debugging line
//               return (
//                 <div
//                   className="flex justify-between items-center gap-2 text-sm my-2"
//                   key={key}
//                 >
//                   <dt className="font-medium text-gray-700 w-[50%]">{label}</dt>
//                   <dd className="font-normal text-gray-700 w-[50%] text-right">
//                     {typeof value === "number" ? value : value.toString()}
//                   </dd>
//                 </div>
//               );
//             }
//             return null;
//           })}
//         </div>
//         <Button
//           variant="outline"
//           className="w-full mt-3"
//           onClick={handleOnClick}
//         >
//           Cancel
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Receipt;

"use client";
import React from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import cancelAppointment from "@/server/cancel-appointment";
import Upcoming from "../badges/upcoming";
import { AlarmCheck } from "lucide-react";

// Update the interface to include all keys from your provided object
interface AppointmentDetails {
  id: number;
  date: string;
  time: string;
  extraNote: string;
  bookingDate: string;
  userName: string;
  userPhoneNumber: number;
}

// Update the keyMap to match the actual keys and provide friendly names
const keyMap: { [K in keyof AppointmentDetails]: string } = {
  id: "Appointment ID",
  date: "Booking Date",
  time: "Booking Time",
  extraNote: "Extra Note",
  bookingDate: "Booked Date",
  userName: "Name",
  userPhoneNumber: "Phone Number",
};

const Receipt = ({
  userUpcomingAppointments,
  user,
}: {
  userUpcomingAppointments: AppointmentDetails;
  user: any;
}) => {
  // if (
  //   !userUpcomingAppointments ||
  //   Object.keys(userUpcomingAppointments).length === 0
  // ) {
  //   return (
  //     <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-lg p-5 text-center">
  //       <p className="text-gray-800">Receipt details not available.</p>
  //     </div>
  //   );
  // }

  // If there's a message instead of appointment details, render it
  if (!userUpcomingAppointments || "message" in userUpcomingAppointments) {
    const message: any = userUpcomingAppointments
      ? userUpcomingAppointments.message
      : "Receipt details not available.";
    return (
      <div className="max-w-sm mb-[71px] mt-5 mx-auto bg-white shadow-lg rounded-lg overflow-hidden h-96 md:max-w-lg p-5 text-center border-4 border-destructive-foreground border-gray-300 relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <AlarmCheck className="w-14 h-14 mb-4 text-gray-300" />{" "}
          {/* Adjust size as needed */}
          <p className="text-gray-700 text-md font-normal mx-auto px-7">
            {message}
          </p>
        </div>
      </div>
    );
  }

  async function handleOnClick() {
    if (user) {
      toast("Please wait...", {
        position: "top-center",
      });
      const cancelAppointmentMessage = await cancelAppointment({
        user,
        userUpcomingAppointments,
      });
      if (cancelAppointmentMessage) {
        toast(cancelAppointmentMessage.message, {
          position: "top-center",
        });
      } else {
        toast(
          "Sorry, something went wrong. Your appointment was not cancelled",
          {
            position: "top-center",
          }
        );
      }
    } else {
      toast("You don't have an upcoming appointment", {
        position: "top-center",
      });
    }
  }

  return (
    <div className="max-w-md h-96 mt-5 mb-[71px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-lg">
      <div className="p-5">
        <div className="bg-gray-50 border p-4 pt-7 rounded-lg relative">
          <div className="absolute right-3 top-1">
            <Upcoming />
          </div>
          {Object.entries(userUpcomingAppointments).map(([key, value]) => {
            if (key in keyMap) {
              const label = keyMap[key as keyof AppointmentDetails];
              return (
                <div
                  className="flex justify-between items-center gap-2 text-sm text-left ml-8 font-medium my-2"
                  key={key}
                >
                  <dt className="font-medium text-gray-700 w-[50%]">{label}</dt>
                  <dd className="font-normal text-gray-700 w-[50%] text-left ml-10">
                    {typeof value === "number" ? value.toString() : value}
                  </dd>
                </div>
              );
            }
            return null; // This should not happen now, but it's good practice to handle this case
          })}
        </div>
        <Button
          variant="outline"
          className="w-full mt-3"
          onClick={handleOnClick}
        >
          Cancel Appointment
        </Button>
      </div>
    </div>
  );
};

export default Receipt;
