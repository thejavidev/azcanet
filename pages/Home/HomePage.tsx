
import Carousel from "@/components/HomePage/Carousel/Carousel";
import Press from "@/components/HomePage/Press/Press";
import Contributor from "@/components/HomePage/Contributor/Contributor";
import Media from "@/components/HomePage/Media/Media";
import Mission from "@/components/HomePage/Mission/Mission";
import Advocacy from "@/components/Advocacy/Advocacy";

const HomePage = () => {
  
  return (
    <>
      <Carousel />
      <Mission />
      <Advocacy />
      <Press />
      <Media />
      <Contributor />
    </>
  );
};

export default HomePage;
