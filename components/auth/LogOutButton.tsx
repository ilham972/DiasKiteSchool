"use client";

import { Button } from "@/components/ui/button";
import { logout } from "@/server/logout";
import { toast } from "sonner";

import React from "react";

const LogOutButton = () => {
  return (
    <Button
      size="sm"
      variant="outline"
      className="hidden lg:flex px-5"
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
        }, 3200); // Adjust the delay as needed
      }}
    >
      Log Out
    </Button>
  );
};

export default LogOutButton;
