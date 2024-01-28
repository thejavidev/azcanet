import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const SearchComponent = ({ api }: any) => {
  const [results, setResults] = useState([]);
  const searchParams = useSearchParams();

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

  return (
    <>
      <div className="px-[100px] py-[20px]">
        {results?.length === 0 && (
          <h2 className="text-center">
            {" "}
            Bu "{query}" sözə uyğun məlumat tapılmadı.
          </h2>
        )}

        {results.map((result: any, index) => (
          <div key={index}>
            {Object.keys(result).map((key) => {
              const value: any = result[key];
              const title = value?.title_en || value?.title_1_en;
              const text = value?.intro_text_en || value?.text_en;

              const charsToReplace = new RegExp(query);

              const newText = text
                ?.toLowerCase()
                ?.replace(
                  charsToReplace,
                  `<span class="bg-red-600 text-white">${query}</span>`
                );

              return (
                <div
                  key={key}
                  className="border-2 px-[10px] mb-3 bg-[#f6f6f6] rounded-sm "
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
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchComponent;
