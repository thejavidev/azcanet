import React from 'react'

const CommonDataNextBtn = ({next,cachedData,handleMoreImage}:any) => {
  return (
    <>
       <div className="flex items-center justify-center mt-4">
        {next < cachedData?.length && (
          <button
            onClick={handleMoreImage}
            className="border-[1px] border-solid border-[#ec5a44] text-[#ec5a44] p-[10px] font-semibold text-lg uppercase rounded-md tl hover:bg-[#ec5a44] hover:text-white"
          >
            See more
          </button>
        )}
      </div>
    </>
  )
}

export default CommonDataNextBtn
