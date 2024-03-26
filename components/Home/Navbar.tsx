import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

import { TopManu } from "@/components/Header/TopManu";
// import { Button, buttonVariants } from "@/components/ui/button";
// import { NavManu } from "./NavManu";
import { BottomManu } from "@/components/Header/bottomManu";
import { Calendar, CalendarDays, List, LogIn } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import React from "react";
import LogOutButton from "@/components/auth/LogOutButton";
import { getAllUpcomingAppointmentsTimes } from "@/server/get-all-upcoming-appointments";
import { getUserUpcomingAppointments } from "@/server/get-user's-upcoming-appointments";
import { getAllExpiredAppointments } from "@/server/get-all-expired-appointments";
import { buttonVariants } from "../ui/button";

async function Navbar() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const AllUpcomingAppointmentsTimes = await getAllUpcomingAppointmentsTimes({
    supabase,
    user,
  });

  const userUpcomingAppointments = await getUserUpcomingAppointments({
    supabase,
    user,
  });

  const AllExpiredAppointments = await getAllExpiredAppointments({
    supabase,
    user,
  });

  console.log("from navbar expirde appointment", AllExpiredAppointments);
  return (
    <nav className="flexBetween max-w-screen-xl mx-auto px-9 relative z-30 py-5">
      <Link href="/">
        {/* <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} /> */}
        <span className="font-bold text-xl sm:text-3xl">DIAS </span>
        <span className="text-1xl text-lg font-extralight sm:text-2xl text-bg-green-50">
          KITE SCHOOL
        </span>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="flexCenter">
        <div>
          <BottomManu
            user={user}
            AllUpcomingAppointmentsTimes={AllUpcomingAppointmentsTimes}
            userUpcomingAppointments={userUpcomingAppointments}
            AllExpiredAppointments={AllExpiredAppointments}
          />
        </div>
        {user ? (
          <LogOutButton />
        ) : (
          <Link
            href="/login"
            className={buttonVariants({
              variant: "secondary",
              className:
                " sm:flex sm:px-4 px-0 bg-green-90 hover:bg-green-50 rounded-[1000px] text-xs md:text-sm lg:text-[16px] md:font-[380] lg:font-[400]  lg:px-8 lg:py-6 sm:py-[23px]  ",
            })}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
