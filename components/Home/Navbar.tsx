import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import LogOutButton from "@/app/auth/_components/LogOutButton";
import { BottomManu } from "@/components/Header/bottomManu";
import { getAllExpiredAppointments } from "@/server/get-all-expired-appointments";
import { getAllUpcomingAppointmentsTimes } from "@/server/get-all-upcoming-appointments";
import { getUserUpcomingAppointments } from "@/server/get-user's-upcoming-appointments";
import { createClient } from "@/utils/supabase/server";
import { AuthModal } from "../../app/auth/_components/modal";

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
        {user ? <LogOutButton /> : <AuthModal />}
      </div>
    </nav>
  );
}

export default Navbar;
