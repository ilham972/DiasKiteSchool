// import React from "react";
// import { cn } from "@/lib/utils"; // Adjust the import path accordingly

// const Step = ({ step }: any) => {
//   return (
//     <div className="px-9 ">
//       <h2 className="sr-only">Steps</h2>
//       <div className="after:mt-4 after:block after:h-1 after:w-full after:rounded-lg after:bg-gray-200">
//         <ol className="grid grid-cols-3 text-sm font-medium text-gray-500">
//           {[...Array(3)].map((_, index) => (
//             <li
//               key={index}
//               className="relative flex justify-start text-blue-600"
//             >
//               <span
//                 className={cn(
//                   "absolute -bottom-[1.75rem]",
//                   index === 0
//                     ? "start-0"
//                     : index === 1
//                     ? "left-1/2 -translate-x-1/2"
//                     : "end-0",
//                   "rounded-full text-white",
//                   step > index ? "bg-primary" : "bg-gray-300"
//                 )}
//               >
//                 <svg
//                   className="h-5 w-5"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </span>
//             </li>
//           ))}
//         </ol>
//       </div>
//     </div>
//   );
// };

// export default Step;
import React from "react";

const steps = [
  { id: "date", title: "Date" },
  { id: "time", title: "Time" },
  { id: "details", title: "Details" },
];

const Step = ({ step }: any) => {
  return (
    <div className="inline-flex items-center">
      <h2 className="sr-only">Steps</h2>
      <div>
        <ol className="flex items-center gap-2 text-xs font-medium text-gray-500 sm:gap-4">
          {steps.map((stepItem, index) => (
            <li key={stepItem.id} className="flex items-center">
              {" "}
              {/* Use stepItem.id instead of index */}
              {step > index ? (
                // Completed Step
                <span className="rounded bg-green-50 p-1.5 text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              ) : (
                // Current or Future Step
                <span
                  className={`rounded text-center p-1.5 font-bold ${
                    step === index
                      ? "bg-blue-50 text-blue-600"
                      : "bg-gray-50 text-gray-600"
                  } flex items-center justify-center gap-2`}
                >
                  <span className="text-[10px]">{index + 1}</span>
                  {step === index && <span>{stepItem.title}</span>}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Step;
