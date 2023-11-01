import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "public/images/projects/Movie Recommendation.png";
import proj2 from "public/images/projects/olympics.jpeg";
import proj3 from "public/images/projects/cricket.jpeg";
import proj4 from "public/images/projects/Email Spam.png";
import proj5 from "public/images/projects/Book.png";
import proj6 from "public/images/projects/Wine.png";
import proj7 from "public/images/projects/Home.jpeg";
import proj8 from "public/images/projects/Ads.png";
import proj9 from "public/images/projects/homeloan.jpeg";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {

  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="Crypto Screener Application github link"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
            aria-label="Crypto Screener Application"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {

  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="rounded text-lg
            font-medium underline md:text-base
            "
            aria-label={title}
          >
            Visit
          </Link>
          <Link
            href={github}
            target={"_blank"}
            className="w-8 md:w-6"
            aria-label={title}
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title> Portfolio | Projects Page</title>
        <meta
          name="description"
          content="Discover the latest projects created by Soujanya"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="MovieMate: Movie Recommendation System"
                summary="MovieMate is a simple content-based movie recommender system deployed with Streamlit. 
                It suggests movies based on your preferences, making it easier to find your next cinematic experience."
                img={proj1}
                link="https://movie-recommender-system-yu8xfzdirt4dwddo6cqjjf.streamlit.app/"
                github="https://github.com/soujanyacheruvu/Movie-Recommender-System"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Exploratory Data Analysis"
                title="120 years of Olympic History"
                img={proj2}
                link="https://olympics-data-gs4tcevgrazpizfaprabo2.streamlit.app/"
                github="https://github.com/soujanyacheruvu/Olympics-Data"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Predictive Analysis - Regression models"
                title="IPL Win Prediction"
                img={proj3}
                link="https://ipl-win-probability-predictor-main-mnwscazbzz5dynhx5w5mhr.streamlit.app/"
                github="https://github.com/soujanyacheruvu/ipl-win-probability-predictor-main"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Preprocessing, NLP, Deployment"
                title="SMS Spam Detector"
                img={proj4}
                link="https://sms-spam-detector-xcwp7bfemltfhvln3isq7c.streamlit.app/"
                github="https://github.com/soujanyacheruvu/SMS-Spam-Detector"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Recommeder System"
                title="Book Recommendation System"
                img={proj5}
                link="https://bookrecommendersystem.onrender.com/"
                github="https://github.com/soujanyacheruvu/BOOK-RECOMMENDER"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="EDA, Time Series Forecasting, ARIMA Models"
                img={proj6}
                title="Wine Sales Analysis"
                link="https://github.com/soujanyacheruvu/Time-Series-Analysis/blob/main/Wine%20Sales%20-%20TSF.ipynb"
                github="https://github.com/soujanyacheruvu/Time-Series-Analysis"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Regression Models, Predictive Analysis"
                img={proj7}
                title="House Price Prediction"
                link="https://github.com/soujanyacheruvu/HousePricePrediction/blob/main/House%20Price%20Prediction.ipynb"
                github="https://github.com/soujanyacheruvu/HousePricePrediction"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="EDA, Clustering"
                img={proj8}
                title="Clustering Ads - Marketing Analytics"
                link="https://github.com/soujanyacheruvu/Clustering-Ads/blob/main/Clustering%20Ads%20-%20Marketing%20Analytics.ipynb"
                github="https://github.com/soujanyacheruvu/Clustering-Ads"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Principal Component Analysis"
                img={proj9}
                title="Home loan transactions - PCA"
                link="https://github.com/soujanyacheruvu/PCA-Bank-Loan-Transactions/blob/main/PCA%20Home%20Loan%20Transactions%20.ipynb"
                github="https://github.com/soujanyacheruvu/PCA-Bank-Loan-Transactions"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
