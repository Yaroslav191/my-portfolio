import React from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
   hidden: {},
   visible: {
      transition: { staggerChildren: 0.2 },
   },
};

const projectVariant = {
   hidden: { opacity: 0, scale: 0.8 },
   visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, text, link }) => {
   const overlayStyles = `hover:cursor-pointer absolute h-full w-full opacity-0 hover:opacity-90 transition
    duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
   const projectTitle = title.split(" ").join("-").toLowerCase();

   return (
      <motion.div variants={projectVariant} className="relative">
         <a href={link} target="_blank" rel="noreferrer">
            <div className={overlayStyles}>
               <p className="text-2xl font-playfair">{title}</p>
               <p className="mt-7">{text}</p>
            </div>
            <img
               src={`../assets/${projectTitle}.png`}
               alt={projectTitle}
               className="h-[400px] w-[350px] md:w-[400px]"
            />
         </a>
      </motion.div>
   );
};

const Projects = () => {
   return (
      <section id="projects" className="py-48 px-5">
         <motion.div
            className="md:w-2/4 mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
               hidden: { opacity: 0, y: -50 },
               visible: { opacity: 1, y: 0 },
            }}
         >
            <div className="mb-10">
               <p className="font-playfair font-semibold text-4xl">
                  MY <span className="text-red">PRO</span>JECTS
               </p>
               <div className="flex justify-center mt-5">
                  <LineGradient width="w-2/3" />
               </div>
            </div>
            {/* <LineGradient width="w-1/3 mb-10" /> */}
            {/* <p className="mt-10 mb-10">
          Adipiscing arcu, in aliquam fringilla cursus. Elit arcu elementum
          viverra malesuada sem ac faucibus dolor. Sagittis scelerisque.
        </p> */}
         </motion.div>

         <div className="flex justify-center">
            <motion.div
               className="sm:grid sm:grid-cols-3 flex flex-col"
               variants={container}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
            >
               <div
                  className="flex justify-center text-center items-center p-10 bg-red w-[350px] md:w-[400px] h-[400px]
                text-2xl font-playfair font-semibold"
               >
                  BEAUTIFUL USER INTERFACES
               </div>

               <Project
                  title="Project 1"
                  text={
                     "Stay connected anytime, anywhere, and make every conversationmemorable with our dynamic chat experience."
                  }
                  link={"https://messanger-godlikes-projects.vercel.app/"}
               />
               <Project
                  title="Project 2"
                  text={
                     "Welcome to  vibrant online community! Immerse yourself in a visual feast as users from around the world share their moments, stories, and creativity through captivating images."
                  }
                  link={"https://sharemey.netlify.app/"}
               />
               <Project
                  title="Project 3"
                  text={
                     "Step into a world of seamless organization and enhanced productivity with our custom Trello application."
                  }
                  link={
                     "https://trello-yaroslavv86-gmailcom-godlikes-projects.vercel.app/"
                  }
               />
               {/* <Project
                  title="Project 1"
                  text={
                     "Stay connected anytime, anywhere, and make every conversationmemorable with our dynamic chat experience."
                  }
                  link={"https://messanger-godlikes-projects.vercel.app/"}
               /> */}
               <div
                  className="flex justify-center text-center items-center p-10 bg-blue w-[350px] md:w-[400px] h-[400px]
                text-2xl font-playfair font-semibold"
               >
                  SMOOTH USER EXPERIENCE
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default Projects;
