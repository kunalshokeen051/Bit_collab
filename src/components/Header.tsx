"use client";
import React from "react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { DoorOpenIcon, SignalIcon } from "lucide-react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="h-[55px] px-2 flex justify-between">
      {/* left Div */}
      <Link href="/">
        <div className="flex h-full items-center text-3xl font-bold gap-2">
          <span className="primary-blue underline underline-offset-4">Bit</span>
          <span>Works</span>
        </div>
      </Link>

      {/* right div */}
      <div className="hidden items-center space-x-4 sm:flex">
        <>
          <Link
            href="/login"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
            })}
          >
            Pricing
          </Link>
          <LoginLink
            className={buttonVariants({
            //   variant: "ghost",
              size: "sm",
            })}
          >
            Sign in <DoorOpenIcon className="ml-2"/>
          </LoginLink>
        </>
      </div>
    </div>
  );
};

export default Header;
