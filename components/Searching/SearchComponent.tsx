import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { nanoid } from "nanoid";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";

const SearchComponent = ({ api }: any) => {
  const [results, setResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState<number | null>(null); // Track the selected item index
  const searchParams = useSearchParams();
  const searchTab = useRef<any>();

  const query = searchParams?.get("q");

  useEffect(() => {
    results?.length > 0 && setResults(api);
  }, [query]);

  useEffect(() => {
    let filterData = api?.filter((i: any) => {
      const values = Object.values(i);

      const found = values.some((value: any) =>
        value?.intro_text_en
          ? value?.intro_text_en?.toLowerCase()?.includes(query)
          : value?.text_en?.toLowerCase()?.includes(query)
      );

      return found;
    });

    filterData?.length > 0 && setResults(filterData);
  }, [api, query]);

  const openSearch = (index: number) => {
    // Toggle the selected item
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem === index ? null : index
    );
  };

  return (
    <>
      <div className="px-[100px] py-[20px] lg:py-[20px] lg:px-[20px]">
        {results?.length === 0 && (
          <h2 className="text-center">
            No information was found for this keyword{" "}
            <span className="font-semibold">"{query}"</span>.
          </h2>
        )}
        {results?.length > 0 && (
          <h3 className="text-xl font-medium capitalize mb-2">results: </h3>
        )}

        {results.map((result: any, index) => {
          const keyid = nanoid();
          const isSelected = selectedItem === index; // Check if the item is selected

          return (
            <div key={keyid}>
              {Object.keys(result).map((key) => {
                const value: any = result[key];
                const title = value?.title_en || value?.title_1_en;
                const text = value?.intro_text_en || value?.text_en;

                const charsToReplace = query ? new RegExp(query) : undefined;

                const newText = text
                  ?.toLowerCase()
                  ?.replace(
                    charsToReplace,
                    `<span class="bg-red-600 text-white">${query}</span>`
                  );

                return (
                  <div
                    key={key}
                    ref={searchTab}
                    className={`border-2 relative px-[10px] py-[15px] mb-3 bg-[#f6f6f6] transition-all rounded-md ${
                      isSelected ? "h-full " : "h-[120px] "
                    } overflow-x-scroll `}
                  >
                    <div className="flex items-start flex-col gap-2">
                      <Link
                        className="underline hover:text-red-600 tl text-[14px]"
                        href={`${key}/${value?.slug_en}`}
                      >
                        {title}
                      </Link>
                      <div
                        className="font-medium text-[14px]"
                        dangerouslySetInnerHTML={{ __html: newText }}
                      ></div>
                    </div>
                    <div className="sticky z-30 bottom-[-15px]  m-auto border-none outline-none  left-0 right-0 flex items-end justify-end text-black">
                      <button
                        className="px-4 py-2 capitalize font-bold w-[40px] tls h-[40px] grid place-content-center overflow-hidden bg-white rounded-full"
                        onClick={() => openSearch(index)}
                      >
                        {isSelected ? (
                          <FaAnglesUp className=" anime" />
                        ) : (
                          <FaAnglesDown className="anime" />
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchComponent;
