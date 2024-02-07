import Link from "next/link";
import React from "react";

const Share = ({copyLink}:any) => {
  return (
    <>
      <div className="flex gap-[30px] items-end mt-[30px] flex-wrap">
        <p>Share:</p>
        <div className="flex items-center gap-[10px]">
          <Link
            href="/"
            className="uppercase border border-[#759acd] text-[#759acd] py-[8px] lg:py-[4px] rounded-[5px] px-[12px] lg:px-[6px] hover:bg-[#759acd] hover:text-white lg:text-[14px]"
          >
            Facebook
          </Link>
          <Link
            href="/"
            className="uppercase border border-[#759acd] text-[#759acd] py-[8px] lg:py-[4px] rounded-[5px] px-[12px] lg:px-[6px] hover:bg-[#759acd] hover:text-white lg:text-[14px]"
          >
            TWITTER
          </Link>
          <div
            onClick={copyLink}
            className="uppercase cursor-pointer border border-[#59a683] text-[#59a683] lg:py-[4px] py-[8px]  lg:px-[6px] rounded-[5px] px-[12px] hover:bg-[#59a683] hover:text-white lg:text-[14px]"
          >
            copy LINK
          </div>
        </div>
      </div>
    </>
  );
};

export default Share;
