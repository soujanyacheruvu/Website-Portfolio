import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { CircularText, LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "public/images/profile/Profile4.jpeg";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Explore portfolio"
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-stretch md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">
              <Image
                src={profilePic}
                alt="Soujanya"
                priority
                className="w-1/2 md:w-1/2"
                style={{ marginLeft: "10rem" }} 
              />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center" >
              <AnimatedText
                text="Transforming Data into Insights"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                As a proficient Data Analyst, I'm committed to translating data into actionable insights. Discover my recent projects and articles, demonstrating my expertise in Data Analysis and Machine Learning.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  href="Resume.pdf"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base`}
                  download
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="mailto:soujanya.cheruvu19@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            className="relative h-auto w-full"
            src={lightBulb}
            alt="Soujanya"
          />
        </div>
      </article>
    </>
  );
}
