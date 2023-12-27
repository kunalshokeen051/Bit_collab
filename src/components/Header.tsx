"use client";
import React, { useState } from "react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  DoorOpenIcon,
  Lightbulb,
  LightbulbIcon,
  LightbulbOff,
} from "lucide-react";

// import { RootState } from "@/app/GlobalRedux/store";
// import { useSelector,useDispatch } from "react-redux";
// import {setIsAuthenticated } from "@/app/GlobalRedux/Features/Counter/AuthSlice";

type Props = {};

const Header = (props: Props) => {
  // const isAuthenticated = useSelector((state:RootState) => state.counter.isAuthenticated);
  // const dispatch = useDispatch();

  const [theme, setTheme] = useState<string>("light");

  function SwitchMode() {
    let html = document.getElementsByTagName("html")[0];
    if (html.classList.contains("light")) {
      html.classList.remove("light");
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
    }
  }

  return (
    <div className="h-[55px] px-2 flex justify-between">
      {/* left Div */}
      <Link href="/">
        <div className="flex h-full items-center text-3xl font-bold gap-2">
          <span className="primary-blue underline underline-offset-4">Bit</span>
          <span>Works</span>
        </div>
      </Link>
      {/* <button onClick={() => dispatch(setIsAuthenticated(!isAuthenticated))}>authenticate</button>
<h2>{isAuthenticated ? " user is logged in" : "user is not logged in"}</h2> */}

      {/* right div */}
      <div className="hidden items-center space-x-4 sm:flex">
        <>
          {/* <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button> */}
          <Link
            href="/pricing"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
            })}
          >
            Pricing
          </Link>
          <Link
            href="/login"
            className={buttonVariants({
              size: "sm",
            })}
          >
            Sign in <DoorOpenIcon className="ml-2" />
          </Link>
          <button
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
            })}
            onClick={SwitchMode}
          >
            {theme == "light" ? (
              <>
                <Lightbulb className="mr-2" />
                Dark Mode
              </>
            ) : (
              <>
                <LightbulbOff className="mr-2" />
                Light Mode
              </>
            )}
          </button>
        </>
      </div>
    </div>
  );
};

export default Header;
