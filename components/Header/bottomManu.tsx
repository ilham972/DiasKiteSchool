"use client";
import { Button, buttonVariants } from "@/components/ui/button";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Calendar,
  CalendarDays,
  CalendarRange,
  Clock,
  History,
} from "lucide-react";
import { useState } from "react";
import Appointment from "./Appointment";
import Receipt from "./Receipt";
import Expired from "./Expired";
import { toast } from "sonner";
import Link from "next/link";

export function BottomManu({
  user,
  AllUpcomingAppointmentsTimes,
  userUpcomingAppointments,
  AllExpiredAppointments,
}: any) {
  const [activeTab, setActiveTab] = useState("appointment");
  console.log("from bootom manuuuu expired", AllExpiredAppointments);

  const renderTab = () => {
    switch (activeTab) {
      case "appointment":
        console.log("from bottome menu", AllUpcomingAppointmentsTimes);

        return (
          <Appointment
            user={user}
            AllUpcomingAppointmentsTimes={AllUpcomingAppointmentsTimes}
          />
        );
      case "booking":
        console.log("from bottome menu- Recipt", userUpcomingAppointments);
        return (
          <Receipt
            user={user}
            userUpcomingAppointments={userUpcomingAppointments}
          />
        );
      case "expired":
        console.log("from bootom manu case expired", AllExpiredAppointments);
        return <Expired AllExpiredAppointments={AllExpiredAppointments} />;
      default:
        return null;
    }
  };
  // md:min-h-[680px]

  return (
    <Drawer>
      <DrawerTrigger
        onClick={() => {
          !user &&
            toast("Before book a call please login", {
              position: "top-center",
              duration: 5000,
            });
        }}
        className={buttonVariants({
          variant: "outline",
          className:
            "rounded-5xl hidden py-1 sm:flex mx-3  text-green-90 lg:text-[16px] lg:font-[400] whitespace-nowrap  lg:px-8 lg:py-[23px] sm:py-5  sm:mx-5 ",
        })}
      >
        Book A Call
      </DrawerTrigger>
      <DrawerTrigger
        onClick={() => {
          !user &&
            toast("Before book a call please login", {
              position: "top-center",
              duration: 5000,
            });
        }}
        className={buttonVariants({
          variant: "ghost",

          className:
            "rounded-[1000px] mt-1  flex  sm:hidden mx-0 px-0  text-green-90 hover:bg-white/0",
        })}
      >
        <Calendar size={34} strokeWidth={0.75} />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm  ">
          <DrawerHeader>
            <div className="flex flex-col items-center">
              {/* Tab buttons */}

              <div className="inline-flex items-center justify-between gap-1 px-1 py-1 border rounded-xl ">
                <Button
                  variant={activeTab === "appointment" ? "default" : "ghost"}
                  size="sm"
                  className={"px-4 py-0 rounded-lg"}
                  onClick={() => setActiveTab("appointment")}
                >
                  <CalendarRange
                    className="lg:hidden flex"
                    size={20}
                    strokeWidth={1.5}
                  />
                  <span className="hidden lg:flex">Appoinment</span>
                </Button>
                <Button
                  variant={activeTab === "booking" ? "default" : "ghost"}
                  size="sm"
                  className={"px-4 py-0 rounded-lg"}
                  onClick={() => setActiveTab("booking")}
                >
                  <Clock
                    className="lg:hidden flex"
                    size={20}
                    strokeWidth={1.5}
                  />
                  <span className="hidden lg:flex">Bookings</span>
                </Button>
                <Button
                  variant={activeTab === "expired" ? "default" : "ghost"}
                  size="sm"
                  className={"px-4 py-0 rounded-lg"}
                  onClick={() => setActiveTab("expired")}
                >
                  <History
                    className="lg:hidden flex"
                    size={20}
                    strokeWidth={1.5}
                  />
                  <span className="hidden lg:flex">Expired</span>
                </Button>
              </div>
            </div>
          </DrawerHeader>

          <div className="pt-0 text-center">{renderTab()}</div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
