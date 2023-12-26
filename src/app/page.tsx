"use client";
import Image from "next/image";
import MaxWidthWrapper from "./HOC/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    return () => {
      AOS.init();
    };
  }, []);

  return (
    <>
      <div className="">
        <MaxWidthWrapper className="mb-12 mt-18 sm:mt-4 flex flex-col items-center justify-center">
          <div
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="1000"
            className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-2 border-gray-500 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50"
          >
            <p
              className="text-sm font-semibold text-gray-700"
            >
              Bit Sync is Coming Soon!
            </p>
          </div>
          <h1
            data-aos="fade-up"
            data-aos-duration="2000"
            className="max-w-4xl flex justify-center flex-wrap text-5xl font-bold md:text-6xl lg:text-7xl"
          >
            <span className="text-blue-600 mr-2">Collaborate </span>
            Better,
            <span className="text-blue-600 mr-2"> Work </span>
            Smarter
          </h1>
          <p
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="800"
            className="mt-5 max-w-prose text-zinc-700 sm:text-lg"
          >
            BitSync enables agile teamwork and enhanced productivity. Elevate
            your projects with open-source collaboration at its best.
          </p>
          <Link
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="1000"
            className={buttonVariants({
              size: "lg",
              className: "mt-5 bg-zinc-800 hover:bg-zinc-900",
            })}
            href="/dashboard"
            target="_blank"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </MaxWidthWrapper>

        {/* value proposition section */}
        <div>
          <div className="relative isolate">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50% - 11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff5fca] to-[#8741e2] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              />
            </div>
          </div>
          <div
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="1200"
            className="mx-auto max-w-6xl px-6 lg:px-8 "
          >
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 ring-1 ring-insert ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src={`/dashboard-image.jpg`}
                  alt="dashboard-image.jpg"
                  width={1264}
                  height={566}
                  quality={100}
                  className="relative z-10 rounded-md shadow-2xl ring-1 ring-gray-900/20"
                />
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50% - 13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff5fca] to-[#8741e2] opacity-20 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>

      {/* Feature Section */}

      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        data-aos-once="true"
        className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56"
      >
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
              Start your session Today
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Team Collaboration has never been easier than with BitSync.
            </p>
          </div>
        </div>

        {/* Steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          {/* step-1 */}
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-4">
              <span className="text-sm font-medium text-blue-600">Step 1</span>
              <span className="text-xl">Sign up for an account</span>
              <span className="mt-2 text-zinc-700">
                Either Starting out with a free plan or choose our pro plan.
                <Link
                  href="/pricing"
                  className="text-blue-700 underline underline-offset-2"
                  // let's start
                >
                  Let&apos;s Start
                </Link>{" "}
              </span>
            </div>
          </li>

          {/* step-2 */}
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-4">
              <span className="text-sm font-medium text-blue-600">Step 2</span>
              <span className="text-xl">Create Team</span>
              <span className="mt-2 text-zinc-700">
                 Click on the <strong>Create Team</strong> button to initiate the setup process.
              </span>
            </div>
          </li>

          {/* step-3 */}
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-4">
              <span className="text-sm font-medium text-blue-600">Step 3</span>
              <span className="text-xl">Invite Team Members</span>
              <span className="mt-2 text-zinc-700">
              After creating your team, invite your colleagues by entering their email addresses.
              </span>
            </div>
          </li>
        </ol>

        <div
            // data-aos="fade-in"
            // data-aos-duration="1000"
            // data-aos-delay="1200"
            className="mx-auto max-w-6xl px-6 lg:px-8 "
          >
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 ring-1 ring-insert ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src={`/landingPage-2.webp`}
                  alt="platformImage.webp"
                  width={1200}
                  height={800}
                  quality={100}
                  className="relative z-10 rounded-md shadow-2xl ring-1 ring-gray-900/20"
                />
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
