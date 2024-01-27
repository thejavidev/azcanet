import Image from "next/image";

import "swiper/css";

const GlobalBanner = ({ longtext, bgColor, images }: any) => {
  return (
    <>
      <div
        style={{
          backgroundColor: `${bgColor}`,
        }}
        className="grid grid-cols-12 gap-4 px-[100px] py-[20px]"
      >
        <div className="col-span-6">
          {images &&
            (Array?.isArray(images) ? (
              images?.map((cur: any, i: number) => (
                <Image
                  key={i}
                  src={cur?.src}
                  width={1000}
                  height={300}
                  alt=""
                  className="w-full h-[350px] object-cover"
                />
              ))
            ) : (
              <Image
                src={images}
                width={1000}
                height={300}
                alt=""
                className="w-full h-[350px] object-cover"
              />
            ))}
        </div>
        <div className="col-span-6 ">
          <div className="flex items-center justify-start h-full">
            <p
              className="font-[700] text-4xl capitalize"
              dangerouslySetInnerHTML={{ __html: longtext && longtext }}
            ></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalBanner;
