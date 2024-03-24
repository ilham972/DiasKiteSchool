"use client";

import { useEffect, useState } from "react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import Step from "@//components/Header/Step";
import { Button, buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerTitle,
} from "@/components/ui/drawer";
import { addBooking } from "@/server/add-booking";

import Link from "next/link";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { PhoneInput } from "./PhoneInput";

export const CalendarTab = ({ user, onDateSelect }: any) => {
  const [date, setDate] = useState(new Date());

  // Call onDateSelect when the date changes
  const handleDateChange = (newDate: any) => {
    if (!user) {
      window.location.assign("/login");
      toast("no user");
    }
    setDate(newDate);
    onDateSelect(newDate);
  };

  return (
    <>
      {/* <DrawerTitle className="mt-3">Pick A Date</DrawerTitle> */}

      {/* {!user ? (
        <DrawerDescription className="text-xs mt-0">
          Before book a call please
          <span className="text-primary">
            <DrawerClose asChild>
              <Link href="/login"> Login</Link>
            </DrawerClose>
          </span>
        </DrawerDescription>
      ) : (
        <DrawerDescription className="text-xs mt-0">
          welcome back {user.full_name}
        </DrawerDescription>
      )} */}
      <div className="inline-flex w-full h-[363px] justify-center ">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateChange}
          className="rounded-md border mt-3 px-7 "
        />
      </div>
    </>
  );
};

export const TimeTab = ({ onTimeSelect, bookedTimes }: any) => {
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 10; hour <= 18; hour++) {
      const isPM = hour >= 12;
      const displayHour = hour % 12 || 12; // Converts "0" hours to "12"
      const suffix = isPM ? "PM" : "AM";
      slots.push(`${displayHour}:00 ${suffix}`);
      slots.push(`${displayHour}:30 ${suffix}`);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const [selectedTime, setSelectedTime] = useState(timeSlots[0]);

  useEffect(() => {
    onTimeSelect(selectedTime);
  }, [selectedTime, onTimeSelect]);

  const handleTimeSelect = (time: any) => {
    setSelectedTime(time);
    onTimeSelect(time);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 px-6 mx-auto mt-9 mb-[31px] text-sm">
        {timeSlots.map((time, index) => {
          // Check if the time slot is booked
          const isBooked = bookedTimes.includes(time);

          return (
            <Button
              key={index}
              variant="outline"
              size="sm"
              disabled={isBooked} // Disable the button if the time slot is booked
              className={
                cn(
                  "md:text-sm text-xs px-0 font-md",
                  selectedTime === time
                    ? "bg-blue-500 text-white text-xs md:text-sm"
                    : isBooked
                    ? "bg-gray-500 text-white text-xm md:text-sm"
                    : "hover:bg-blue-100"
                ) // Add a different style for booked slots if desired
              }
              onClick={() => handleTimeSelect(time)}
            >
              {time}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

const detailFormSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required.",
  }),
  phoneNumber: z
    .string()
    .min(1, {
      message: "Phone number is required.",
    })
    .regex(/^\+?(\d.*){3,}$/, "Invalid phone number"),
  extraNote: z.string().optional(),
});

export function DetailTab({ selectedDate, selectedTime }: any) {
  const form = useForm({
    resolver: zodResolver(detailFormSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      extraNote: "",
    },
  });
  const formatDateForServer = (date: any) => {
    if (!(date instanceof Date)) {
      console.error(
        "Invalid date provided to formatDateToLocalISOString:",
        date
      );
      return ""; // Return a sensible default or handle the error as appropriate
    }
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth() is zero-based
    const day = date.getDate();

    return `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
  };

  const formattedDate = formatDateForServer(selectedDate);

  const onSubmit = async (values: any) => {
    // Assuming `selectedDate` and `selectedTime` are passed as props to DetailTab
    const formData = {
      ...values,
      date: formattedDate,
      time: selectedTime,
      // Default status
    };

    toast("Please wait...", {
      position: "top-center",
    });

    try {
      const response = await addBooking(formData);
      if (response.message) {
        toast.success(`${response.message}`, {
          position: "top-center",
        });
      } else {
        toast.error("An unexpected error occurred.", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log("erorrda - addbooking function-appointment.tsx", error);
    }
  };
  // mt-3  md:mt-11 md:mb-[97px]
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" space-y-3 md:space-y-8 w-10/12 mx-auto h-auto pb-0 mb-0 md:min-h-[373px] md:mt-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }: any) => (
            <FormItem>
              {/* <FormLabel>Name</FormLabel> */}
              <FormControl>
                <Input {...field} placeholder="John Doe" />
              </FormControl>
              <FormMessage>{form.formState.errors.name?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }: any) => (
            <FormItem>
              {/* <FormLabel>Phone Number</FormLabel> */}
              <FormControl>
                {/* <Input {...field} placeholder="Whats Up Number" /> */}
                <PhoneInput {...field} placeholder="Whats up Number" />
              </FormControl>
              <FormMessage>
                {form.formState.errors.phoneNumber?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="extraNote"
          render={({ field }: any) => (
            <FormItem>
              {/* <FormLabel>Extra Note</FormLabel> */}
              <FormControl>
                <Input
                  className="h-12 pt-0 align-text-top md:flex hidden"
                  {...field}
                  placeholder="Additional details(Optional)"
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.extraNote?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <DrawerClose className="w-full mb-0 pb-0">
          <Button className="w-full mb-0 pb-0" type="submit">
            Submit
          </Button>
        </DrawerClose>
      </form>
    </Form>
  );
}
const formatDateToLocalISOString = (date: any) => {
  if (!(date instanceof Date)) {
    console.error("Invalid date provided to formatDateToLocalISOString:", date);
    return ""; // Return a sensible default or handle the error as appropriate
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // JavaScript months are 0-indexed.
  const day = date.getDate();

  // Pad single digits with leading zeros
  const paddedMonth = month.toString().padStart(2, "0");
  const paddedDay = day.toString().padStart(2, "0");

  return `${year}-${paddedMonth}-${paddedDay}`;
};

export function Appointment({ user, AllUpcomingAppointmentsTimes = {} }: any) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  const formattedSelectedDate = formatDateToLocalISOString(selectedDate);

  // Use the formattedSelectedDate for comparisons or as a key in appointmentDatas
  const bookedTimesForSelectedDate =
    AllUpcomingAppointmentsTimes[formattedSelectedDate] || [];

  const handleDateSelected = (date: any) => {
    setSelectedDate(date);
    // setCurrentStep(currentStep + 1);
  };

  const handleTimeSelected = (time: any) => {
    setSelectedTime(time);
    // setCurrentStep(currentStep + 1);
  };

  const handleContinue = () => {
    setCurrentStep(currentStep < 3 ? currentStep + 1 : currentStep);
  };

  const renderStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <CalendarTab user={user} onDateSelect={handleDateSelected} />;
      case 2:
        return (
          <TimeTab
            onTimeSelect={handleTimeSelected}
            bookedTimes={bookedTimesForSelectedDate}
          />
        );
      case 3:
        return (
          <DetailTab
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            user={user}
          />
        );
      default:
        return <div>Process Completed</div>;
    }
  };

  return (
    <>
      <Step step={currentStep} />

      {renderStepComponent()}
      <DrawerFooter className=" pb-0 md:pb-5 pt-5 ">
        {user ? (
          currentStep < 3 && (
            <Button
              className="mx-auto w-11/12 mb-3 md:mb-0"
              onClick={handleContinue}
            >
              Continue
            </Button>
          )
        ) : (
          <DrawerClose asChild>
            <Link
              href="/login"
              className={buttonVariants({
                className: "px-0 mx-5",
              })}
            >
              Continue
            </Link>
          </DrawerClose>
        )}

        {/* <DrawerClose asChild>
        <a
          href="https://wa.me/94766558873 "
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({
            variant: "outline",
            className: "w-full ",
          })}
        >
          DM Now
        </a>
      </DrawerClose> */}
      </DrawerFooter>
    </>
  );
}

export default Appointment;

// import { CardHeader, CardContent, Card } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"

// export default function Component() {
//   return (
//     <Card className="w-full max-w-lg">
//       <CardHeader>
//         <div>Schedule your appointment</div>
//         <div className="text-gray-500">Please enter your information to confirm your appointment.</div>
//       </CardHeader>
//       <CardContent className="flex">
//         <form className="grid gap-6 w-full">
//           <div className="grid gap-1">
//             <Label htmlFor="name">Full name</Label>
//             <Input className="w-full" id="name" placeholder="Enter your full name" required />
//           </div>
//           <div className="grid gap-1">
//             <Label htmlFor="email">Email</Label>
//             <Input className="w-full" id="email" placeholder="Enter your email" required type="email" />
//           </div>
//           <div className="grid gap-1">
//             <Label htmlFor="phone">Phone</Label>
//             <Input className="w-full" id="phone" placeholder="Enter your phone number" required type="tel" />
//           </div>
//           <Button className="w-full" type="submit">
//             Book appointment
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   )
// }
