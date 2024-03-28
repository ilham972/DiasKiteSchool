"use client";

import { Button } from "@/components/ui/button";
import { logout } from "@/app/auth/_actions/logout";
import { toast } from "sonner";

import React from "react";

const LogOutButton = () => {
  return (
    <Button
      className="sm:flex sm:px-4 border border-[#64CCC5] hover:text-white  text-green-90 px-3 bg-background hover:bg-green-50 rounded-[1000px] text-xs md:text-sm lg:text-[16px] md:font-[380] lg:font-[400]  lg:px-8 lg:py-6 sm:py-[23px] "
      variant="secondary"
      onClick={() => {
        // Display the toast message with the undo option
        toast("You're being logged out", {
          description: "Have a nice day 😊",
          position: "top-center",
          action: {
            label: "Undo",
            onClick: () => {
              // Cancel the logout process
              clearTimeout(logoutTimer);
              console.log("Logout cancelled");
            },
          },
        });

        // Set a delay before actually logging out
        const logoutTimer = setTimeout(async () => {
          // Call the logout server action here
          await logout();
        }, 2000); // Adjust the delay as needed
      }}
    >
      Log Out
    </Button>
  );
};

export default LogOutButton;
