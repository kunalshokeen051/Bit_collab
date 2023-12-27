"use client"
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  const classes: string =
    "mx-auto w-full max-w-screen-xl px-2.5 md:px-20" + className;

  return <div className={classes}>{children}</div>;
};

export default MaxWidthWrapper;
