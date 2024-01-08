import Link from "next/link";
import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";

const Breadcrumb = ({ pageNames }: any) => {
  return (
    <>
      <div className="flex items-center h-[50px] bg-[#f3f3f3] px-[100px] py-[0] gap-1">
        {pageNames?.map((page: any, index: any) => (
          <div key={index}>
            {index < pageNames.length - 1 ? (
              <div className="flex items-center">
                <Link className="capitalize font-[600] text-[#ec5a44] text-[18px]" href={page?.link}>
                  {page?.name}
                </Link>
                <MdOutlineNavigateNext className='text-[20px]' />
              </div>
            ) : (
              <span className="capitalize text-[#6c757d] text-[18px]">{page?.name}</span>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Breadcrumb;
