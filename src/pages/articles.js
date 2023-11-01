import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import blog1 from "public/images/articles/Data collection.png";
import blog2 from "public/images/articles/RealEstate.png";

import Layout from "@/components/Layout";
import Link from "next/link";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";
import { Article } from "../components/Articles/Article";
import { FeaturedArticle } from "../components/Articles/FeaturedArticle";

export const FramerImage = motion(Image);

export const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

export default function Articles() {
  return (
    <>
      <Head>
        <title>Simple Portfolio Built with Nextjs | Articles Page</title>
        <meta name="description" content="Browse through CodeBucks's collection of software engineering articles and 
        tutorials on Next.js, React.js, web development, and more. 
        Gain valuable insights and stay up-to-date with SEO tips for building a developer portfolio." />
      </Head>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change the World!"
            className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              img={blog1}
              title="The Foundation of Insight: The Significance of Data Collection"
              time="6 min read"
              summary="This article emphasizes the significance of data collection in the digital age. It highlights how data 
              collection is essential for informed decision-making, the different methods and types of data, and its role in 
              various industries. The article underscores the importance of responsible data collection for a better future."
              link="https://devdreaming.com/blogs/create-3-different-types-of-loading-screens-in-react"
            />

            <FeaturedArticle
              img={blog2}
              title="Revolutionizing Real Estate: The Role of Data Analysis and AI"
              time="10 min read"
              summary="This article delves into the impact of data analysis and AI on the real estate industry. It covers 
              common algorithms, the importance of data analysis, problems AI addresses, and spotlights 10 companies that 
              have harnessed these technologies for more accurate valuations, personalized recommendations, and enhanced market 
              insights."
              link="https://devdreaming.com/blogs/create-3-different-types-of-loading-screens-in-react"
            />
          </ul>
          <br/>
          <br/>
          <br/>
        

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              img={blog1}
              title="The Foundation of Insight: The Significance of Data Collection"
              time="6 min read"
              summary="This article emphasizes the significance of data collection in the digital age. It highlights how data 
              collection is essential for informed decision-making, the different methods and types of data, and its role in 
              various industries. The article underscores the importance of responsible data collection for a better future."
              link="https://devdreaming.com/blogs/create-pagination-component-reactjs"
            />

            <FeaturedArticle
              img={blog2}
              title="Revolutionizing Real Estate: The Role of Data Analysis and AI"
              time="10 min read"
              summary="This article delves into the impact of data analysis and AI on the real estate industry. It covers 
              common algorithms, the importance of data analysis, problems AI addresses, and spotlights 10 companies that 
              have harnessed these technologies for more accurate valuations, personalized recommendations, and enhanced market 
              insights."
              link="https://devdreaming.com/blogs/create-3-different-types-of-loading-screens-in-react"
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center mt-32 my-16">
            More Articles
          </h2>

          <ul className="flex flex-col items-center relative">
            <Article
              title="form validation in reactjs: build a reusable custom hook for inputs and error handling"
              img={blog2}
              date="January 27, 2023"
              link="https://devdreaming.com/blogs/react-form-validation-custom-hook"
            />
          
          </ul>
        </Layout>
      </main>
    </>
  );
}
