"use client";
import { Button, buttonVariants } from "@/components/ui/button";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CalendarRange, Clock, History } from "lucide-react";
import { useState } from "react";
import Appointment from "./Appointment";
import Receipt from "./Receipt";
import Expired from "./Expired";

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

  return (
    <Drawer>
      <DrawerTrigger className={buttonVariants({ size: "sm" })}>
        Book A Call
      </DrawerTrigger>
      <DrawerContent className="min-h-[640px]   md:min-h-[680px]">
        <div className="mx-auto w-full max-w-sm  ">
          <DrawerHeader>
            <div className="flex flex-col items-center">
              {/* Tab buttons */}

              <div className="inline-flex items-center justify-between gap-1 px-1 border rounded-xl ">
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
