import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import React from 'react';
import { redirect } from "next/navigation";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

type Props = {}

var userData:KindeUser | null;

const Page = (props: Props) => {
  
  const { getUser, getPermission } = getKindeServerSession();
  const fetchUserData = () => {
     getUser().then(data => {
      userData = data;
    });
  };
  
  fetchUserData();

// if(!userData || !userData.id)
// {
//   redirect(`/auth-callback?origin=dashboard?username=${userData?.email}`);
// }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Link  className={`absolute top-5 left-5 ${buttonVariants({
              // variant: "ghost",
              size: "sm",
            })}`}
       href='/'>
        Go back</Link>
      <h1 className="text-3xl">Welcome to Your Dashboard, {userData?.given_name}!</h1>
    </div>
  )
}

export default Page