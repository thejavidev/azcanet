import Image from "next/image";
import React from "react";

const CommonDataInenr = ({ images, title1, title2 }: any) => {
  return (
    <>
      <div>
        {images &&
          images?.map((item: any, i: number) => (
            <Image
              src={item?.src}
              key={i}
              alt=""
              width={1000}
              height={300}
              className="w-full object-cover h-[350px] lg:h-[250px]"
            />
          ))}
        <div className="px-[150px] 2xl:px-[50px] lg:px-[20px] py-[20px] contentstatments">
          <h3
            className="font-bold text-3xl lg:text-lg md:text-sm px-4"
            dangerouslySetInnerHTML={{ __html: title1 }}
          ></h3>
          <p
            className="font-normal text-md px-4"
            dangerouslySetInnerHTML={{ __html: title2 }}
          ></p>
        </div>
      </div>
    </>
  );
};

export default CommonDataInenr;
