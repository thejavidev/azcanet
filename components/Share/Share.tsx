import Link from "next/link";
import React from "react";

const Share = ({copyLink}:any) => {
  return (
    <>
      <div className="flex gap-[30px] items-end mt-[30px]">
        <p>Share:</p>
        <div className="flex items-center gap-[10px]">
          <Link
            href="/"
            className="uppercase border border-[#759acd] text-[#759acd] py-[8px] rounded-[5px] px-[12px] hover:bg-[#759acd] hover:text-white"
          >
            Facebook
          </Link>
          <Link
            href="/"
            className="uppercase border border-[#759acd] text-[#759acd] py-[8px] rounded-[5px] px-[12px] hover:bg-[#759acd] hover:text-white"
          >
            TWITTER
          </Link>
          <div
            onClick={copyLink}
            className="uppercase cursor-pointer border border-[#59a683] text-[#59a683] py-[8px] rounded-[5px] px-[12px] hover:bg-[#59a683] hover:text-white"
          >
            copy LINK
          </div>
        </div>
      </div>
    </>
  );
};

export default Share;
