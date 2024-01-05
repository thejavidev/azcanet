import Image from "next/image";
import Link from "next/link";

const About = ({title, text, url, bg}) => {
  return (
    <>
      <div style={{ backgroundImage: `url(${bg})`}} className="px-[183px] py-[60px] bg-cover bg-full text-white flex items-center gap-[24px]">
        <div className="w-[50%]">
          <h3 className="text-[34px] font-[700] ps-[18px] relative before:content-[''] before:w-[8px] before:h-full before:left-0 before:absolute before:bg-white">{title}</h3>
          <p className="pt-[20px] text-justify text-[16px] font-[400]">{text}</p>
        </div>
        <div className="w-[50%]">
          <Image
            src={url}
            width={1000}
            height={500}
            alt={`Picture of the ${title}`}
            className="w-full h-auto object-cover object-center rounded-[4px] overflow-hidden"
          />
        </div>
      </div>
    </>
  );
};

export default About;
