// import Image from "next/image";
import Link from "next/link";

import { TopManu } from "@/components/Header/TopManu";
import { Button, buttonVariants } from "@/components/ui/button";
import { NavManu } from "./NavManu";
import { BottomManu } from "./bottomManu";
import { Calendar, CalendarDays, List, LogIn } from "lucide-react";
import { createClient } from "@/utils/supabase/server";

import React from "react";
import LogOutButton from "@/components/auth/LogOutButton";
import { getAllUpcomingAppointmentsTimes } from "@/server/get-all-upcoming-appointments";
import { getUserUpcomingAppointments } from "@/server/get-user's-upcoming-appointments";
import { getAllExpiredAppointments } from "@/server/get-all-expired-appointments";

async function Navbar() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const AllUpcomingAppointmentsTimes = await getAllUpcomingAppointmentsTimes({
    supabase,
    user,
  });
  console.log(
    "from Navbar - all upcomingAppointmentTimes",
    AllUpcomingAppointmentsTimes
  );
  const userUpcomingAppointments = await getUserUpcomingAppointments({
    supabase,
    user,
  });

  console.log("from Navbar - Recipt", userUpcomingAppointments);

  const AllExpiredAppointments = await getAllExpiredAppointments({
    supabase,
    user,
  });

  console.log("from navbar expirde appointment", AllExpiredAppointments);

  return (
    <div className="sticky h-14 inset-x-0 top-0 z-30 w-full shadow-sm border-gray-200 bg-white/75 backdrop-blur-lg transition-all dark:bg-black ">
      <nav className="flex items-center justify-between mx-auto-[1440px]  px-6 lg:px-20 3xl:px-0 relative z-30 pb-9 pt-1 lg:pt-2  ">
        <Link href="/" className="pt-2">
          {/* <Image src="/logo.svg" alt="logo" width={74} height={29} /> */}
          <span className="font-bold text-1xl">DIAS </span>
          <span className="text-1xl font-extralight text-primary">
            KITE SCHOOL
          </span>
        </Link>
        <NavManu className="hidden h-full gap-12 lg:flex" />
        <div className="inline-flex justify between gap-4 ">
          {user ? (
            <LogOutButton />
          ) : (
            <Link
              href="/login"
              className={buttonVariants({
                size: "sm",
                variant: "outline",
                className: "hidden lg:flex px-5",
              })}
            >
              Login
            </Link>
          )}
          <div>
            <BottomManu
              user={user}
              AllUpcomingAppointmentsTimes={AllUpcomingAppointmentsTimes}
              userUpcomingAppointments={userUpcomingAppointments}
              AllExpiredAppointments={AllExpiredAppointments}
            />
            <TopManu />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
{
  /* {/* <>
              <Button variant="ghost" size="icon" className="lg:hidden mr-1">
                <CalendarDays
                  size={30}
                  strokeWidth={1}
                  className="flexBetween gap-1 lg:hidden pt-1"
                />
              </Button>
              <BottomManu user={user}>
                <Button variant="default" size="sm" className="hidden lg:flex">
                  Book A Call
                </Button>
              </BottomManu>
            </> */
}
