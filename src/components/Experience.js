import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Business Analyst"
              company="Mediamint"
              companyLink="https://mediamint.com/"
              time="2022-Present"
              address="Hyderabad, India"
              work="Contributed to cross-functional teams at Mediamint, where I spearheaded data-driven strategies, 
              enhanced project efficiency, automated data processes, and leveraged advanced analytics tools like Power BI 
              and Tableau to empower stakeholders with insightful dashboards. My role included optimizing revenue predictions 
              by 15%, elevating customer satisfaction scores by 20% through sentiment analysis, and streamlining data collection 
              through Python and SQL automation, all while championing data transparency and documentation for 
              seamless team collaboration."
            />

            <Details
              position="Data Analyst"
              company="Mediamint"
              companyLink="https://mediamint.com/"
              time="2020-2022"
              address="Hyderabad, India"
              work="Managed SQL database, collaborated with project managers, applied machine learning for 20% 
              better project predictions, improved data quality by 30%, and enhanced project planning by 25%. 
              My role also involved merging data from diverse sources for a comprehensive view of company performance."
            />

            <Details
              position="Risk Analyst"
              company="Amazon"
              companyLink="https://amazon.com"
              time="2019-2020"
              address="Hyderabad, India"
              work="At Amazon, I proactively assessed seller profiles, 
              monitored transactions for suspicious activities, and investigated potential fraud, 
              suspending over 2,000 high-risk accounts every Quarter. I also used machine learning to 
              dismantle a network of fraudulent sellers, prevented scams, and ensured product authenticity 
              through seller vetting and background checks on suppliers."
            />

            <Details
              position="Accounting Assistant"
              company="Sri Accounting and Business Services"
              companyLink="hhttp://sriaccounting.com.au/"
              time="2017-2019"
              address="Sydney, Australia"
              work="At Sri Accounting, I efficiently managed financial transactions 
              for multiple businesses using tools like XERO and MYOB. I played a key role in aiding individuals 
              and businesses with tax filings ensuring financial compliance"
            />

            <Details
              position="Procurement Assistant"
              company="Gemini Edibles and Fats India Pvt. Ltd."
              companyLink="https://www.gefindia.com/"
              time="2016-2017"
              address="Hyderabad, India"
              work="At Gemini Edibles, I sourced and procured packaging and manufacturing materials for edible oil manufacturing, 
              optimized supply chains, and enhanced data accuracy by 30% with SAP systems. 
              I streamlined procurement, evaluated vendor proposals, and reduced labor hours by 100 annually 
              while boosting plant efficiency by 20%."
            />

            <Details
              position="Intern"
              company="Axis Bank"
              companyLink="https://www.axisbank.com/"
              time="Summer 2015"
              address="Hyderabad, India"
              work="As an intern at Axis Bank, I conducted a customer satisfaction project focusing on mutual funds. 
              This project resulted in improved satisfaction scores, identified areas for growth, and contributed 
              to a noticeable increase in mutual fund investments. My work also led to a more targeted marketing 
              approach and a reduction in customer complaints related to mutual funds."
            />  
          </ul>
        </div>
        </div>
    );
};

export default Experience;
