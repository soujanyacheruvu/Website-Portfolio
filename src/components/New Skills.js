import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, work }) => {
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
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-primary dark:text-primaryDark">
          {position}{" "}
        </h3>
        
        
        <p
          className="font-medium w-full md:text-sm"
          dangerouslySetInnerHTML={{ __html: work }}
        ></p>
      </motion.div>
    </li>
  );
};

const ProgrammingSkills = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-6xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Skills
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark origin-top dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Areas of Expertise"
            work="Business Intelligence, Predictive Analysis, Data Analytics, Data Management, Data Mining, Database Schema Design,
            Data Engineering, ETL, Data Visualization, Strategic Business Planning, Fraud Detection and Prevention, Analytical Thinking,
            Software Development Life Cycle, Public speaking and presentation "
          />
          <Details
            position="Python"
            work="Pandas, Numpy, SciPy, Matplotlib, streamlit, scikit-learn, pickle, BeautifulSoup, Scrapy, request, geopandas, NLTK, Plotly, Seaborn, TensorFlow, Pytorch"
          />

          <Details
            position="R Programming"
            work="dplyr, ggplot2, tidyr, readr, lubridate, data.table, reshape2, stringr, plyr, tidyverse"
          />

          <Details
            position="SQL"
            work="SQL Server, PostgreSQL, MySQL, SQLite, Oracle Database, IBM Db2, Amazon Redshift, Snowflake, Microsoft Azure SQL Database, Google BigQuery"
          />

          <Details
            position="Visualization"
            work="Tableau, Microsoft PowerBI, Looker Studio, QlikView"
          />

          <Details
            position="Development Tools"
            work="Visual Studio Code, Pycharm, Spyder, RStudio, Jupyter Notebook, SQL Server Management Studio (SSMS)"
          />

          <Details
            position="Statistical Analysis"
            work="Regression, Classification, Clustering, Decision Trees, Random Forests, Neural Networks, 
            Regression Models, Hypothesis Testing, Experimental Design, Statistical Modelling, A/B Testing, 
            Machine Learning, NLP Models"
          />

          <Details
            position="Cloud Technologies"
            work="Azure (Databricks, Data Factory, DevOps, LogicApps)"
          />

          <Details
            position="Collaboration and Project Management"
            work="Git, Github, Slack, Microsoft, Google, Salesforce, Jira, Scrum, Agile"
          />

          <Details
            position="Web Development"
            work="HTML5, CSS, JavaScript, Tailwind CSS"
          />

          <Details
            position="Design"
            work="Figma, AdobeXD, Sketch, Canva"
          />
        </ul>
      </div>
    </div>
  );
};

export default ProgrammingSkills;
