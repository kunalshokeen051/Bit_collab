"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");
  const username = searchParams.get("username");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/login?username=${username}`);

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error(
            "Failed to fetch user data:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, [username]);

  router.push(`${origin}`);
};

export default Page;
