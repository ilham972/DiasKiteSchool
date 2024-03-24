// "use client";
// const Expired = ({ AllExpiredAppointments = {} }: any) => {
//   return (
//     <main className="flex flex-col lg:flex-row gap-6 p-4 md:p-6">
//       <section className="w-full lg:w-1/2 flex flex-col gap-6">
//         <div className="grid gap-4">
//           <div className="flex items-center justify-between p-4 border rounded-md">
//             <div className="flex-1">
//               <div className="font-semibold">
//                 10:00 AM {/* booked time here */}
//               </div>
//               <div className="text-sm text-gray-500 dark:text-gray-400">
//                 24th March {/* booked date here */}
//               </div>
//               <button className="text-xs font-semibold text-red-500 dark:text-red-400">
//                 Cancelled {/* status here */}
//               </button>
//             </div>
//             <div className="flex-1 text-right">
//               <div className="text-xs text-gray-400 dark:text-gray-500">
//                 Booked Date: 22nd March{" "}
//                 {/* the data when the user book the apppoinment - from inserted_at */}
//               </div>
//               <div className="text-xs text-gray-400 dark:text-gray-500">
//                 updated Date: 22nd March{" "}
//                 {/* the data when the user book the apppoinment - from inserted_at */}
//               </div>
//               <div className="text-xs text-gray-400 dark:text-gray-500">
//                 Appointment ID: #123 {/* id of appointment */}
//               </div>
//               <div className="text-xs text-gray-400 dark:text-gray-500">
//                 Extra Note: Lorem ipsum dolor sit amet{" "}
//                 {/* extra note give by user when user book the appointment */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Expired;

// AllExpiredAppointments: [
//   {
//     date: "2024-03-30",
//     time: "18:00:00",
//     extra_note: "cool",
//     status: "Cancelled",
//     inserted_at: "2024-03-21T17:08:37.265138+00:00",
//     updated_at: "2024-03-21T17:10:01.563296+00:00",
//   },
// ];

// const Expired = ({
//   AllExpiredAppointments = [],
// }: {
//   AllExpiredAppointments: any[];
// }) => {
//   return (
//     <ScrollArea className="h-[500px] w-full rounded-md ">
//       <main className="flex flex-col gap-6 p-4 md:py-6 md:px-0">
//         <section className="w-full flex flex-col gap-6">
//           <div className="grid gap-4">
//             {Array.isArray(AllExpiredAppointments) ? (
//               AllExpiredAppointments.map((appointment) => (
//                 <div
//                   key={appointment.id}
//                   className="flex items-center justify-between p-4 border text-left rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
//                 >
//                   <div className="flex-1">
//                     <div className="font-semibold">
//                       {appointment.time} {/* booked time */}
//                     </div>
//                     <div className="text-sm text-gray-500 dark:text-gray-400">
//                       {format(new Date(appointment.date), "do MMMM")}{" "}
//                       {/* booked date */}
//                     </div>
//                     {appointment.status === "Cancelled" && <Cancelled />}
//                     {appointment.status === "Passed" && <Passed />}
//                   </div>
//                   <div className="flex-1 text-right">
//                     <div className="text-xs text-gray-400 dark:text-gray-500">
//                       Booked:{" "}
//                       {format(new Date(appointment.inserted_at), "do MMMM")}{" "}
//                       {/* the date when the user booked the appointment - from inserted_at */}
//                     </div>
//                     <div className="text-xs text-gray-400 dark:text-gray-500">
//                       {`${appointment.status}`}:{" "}
//                       {format(new Date(appointment.updated_at), "do MMMM")}{" "}
//                       {/* the date when the appointment was last updated - from updated_at */}
//                     </div>
//                     <div className="text-xs text-gray-400 dark:text-gray-500">
//                       ID: #{appointment.id} {/* id of appointment */}
//                     </div>
//                     <div className="text-xs text-gray-400 dark:text-gray-500">
//                       Note: {appointment.extra_note || "No additional notes"}{" "}
//                       {/* extra note given by user when booking the appointment */}
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="max-w-sm mb-[71px] mt-5 mx-auto bg-white shadow-lg rounded-lg overflow-hidden h-96 md:max-w-lg p-5 text-center border-4 border-destructive-foreground border-gray-300 relative">
//                 <div className="absolute inset-0 flex flex-col items-center justify-center">
//                   <Scroll className="w-14 h-14 mb-4 text-gray-300" />{" "}
//                   {/* Adjust size as needed */}
//                   <p className="text-gray-700 text-md font-normal mx-auto px-7">
//                     you don&apos;t have any passed appointments
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </section>
//       </main>
//     </ScrollArea>
//   );
// };

// export default Expired;

"use client";
import React from "react";
import { format } from "date-fns";
import { ScrollArea } from "../ui/scroll-area";
import Cancelled from "../badges/cancelled";
import Passed from "../badges/passed";
import { Scroll } from "lucide-react";

const Expired = ({
  AllExpiredAppointments = [],
}: {
  AllExpiredAppointments: any[];
}) => {
  if (
    !Array.isArray(AllExpiredAppointments) ||
    AllExpiredAppointments.length === 0
  ) {
    // Condition for no appointments
    return (
      <div className="max-w-sm mb-[71px] mt-5 mx-auto bg-white shadow-lg rounded-lg overflow-hidden h-96 md:max-w-lg p-5 text-center border-4 border-gray-50 relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Scroll className="w-14 h-14 mb-4 text-gray-300" />
          <p className="text-gray-700 text-md font-normal mx-auto px-8">
            You don't have any passed appointments.
          </p>
        </div>
      </div>
    );
  }

  // Condition for displaying appointments
  return (
    <ScrollArea className="h-[475px] w-full rounded-md">
      <main className="flex flex-col gap-6 p-4 md:py-6 md:px-0">
        <section className="w-full flex flex-col gap-6">
          <div className="grid gap-4">
            {AllExpiredAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-center justify-between p-4 border text-left rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <div className="flex-1">
                  <div className="font-semibold">
                    {appointment.time} {/* booked time */}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {format(new Date(appointment.date), "do MMMM")}{" "}
                    {/* booked date */}
                  </div>
                  {appointment.status === "Cancelled" && <Cancelled />}
                  {appointment.status === "Passed" && <Passed />}
                </div>
                <div className="flex-1 text-right">
                  <div className="text-xs text-gray-400 dark:text-gray-500">
                    Booked:{" "}
                    {format(new Date(appointment.inserted_at), "do MMMM")}{" "}
                    {/* the date when the user booked the appointment */}
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">
                    {`${appointment.status}`}:{" "}
                    {format(new Date(appointment.updated_at), "do MMMM")}{" "}
                    {/* the date when the appointment was last updated */}
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">
                    ID: #{appointment.id} {/* id of appointment */}
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">
                    Note: {appointment.extra_note || "No additional notes"}{" "}
                    {/* extra note */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </ScrollArea>
  );
};

export default Expired;
