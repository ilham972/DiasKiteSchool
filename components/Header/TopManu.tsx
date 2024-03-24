"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronDownCircle,
  List,
  LogIn,
  Menu,
  UserRound,
  LogOut,
} from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import Link from "next/link";
import { NavManu } from "./NavManu";
import { BottomManu } from "./bottomManu";

export function TopManu() {
  return (
    <Sheet>
      <SheetTrigger
        className={buttonVariants({
          variant: "outline",
          size: "sm",
          className: "cursor-pointer items-center lg:hidden px-3 ",
        })}
      >
        <Menu size={16} />
      </SheetTrigger>
      <SheetContent side={"top"}>
        <SheetHeader className=" flex flex-row justify-between items-center ">
          <SheetTitle>
            <NavManu />
          </SheetTitle>
          <div className="mr-12 ">
            {/* <SheetClose>
              {user ? (
                <LogoutLink
                  className={buttonVariants({
                    size: "sm",
                    variant: "outline",
                    className: "lg:hidden flex px-5",
                  })}
                >
                  Logout
                </LogoutLink>
              ) : (
                <RegisterLink
                  className={buttonVariants({
                    size: "sm",
                    variant: "outline",
                    className: "lg:hidden flex px-5",
                  })}
                >
                  Register
                </RegisterLink>
              )}
            </SheetClose> */}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
