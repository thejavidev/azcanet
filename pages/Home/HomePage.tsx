"use client"
import Carousel from "@/components/HomePage/Carousel/Carousel";
import Press from "@/components/HomePage/Press/Press";
import Contributor from "@/components/HomePage/Contributor/Contributor";
import Media from "@/components/HomePage/Media/Media";
import Mission from "@/components/HomePage/Mission/Mission";
import Advocacy from "@/components/Advocacy/Advocacy";
import { motion as m } from "framer-motion";


const HomePage = () => {
 
 
  return (
    <>
     <title>Azcanet.ca - Home Page</title>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <Carousel />
        <Mission />
        <Advocacy />
        <Press />
        <Media />
        <Contributor />
      </m.div>
    </>
  );
};

export default HomePage;
