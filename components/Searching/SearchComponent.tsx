import FetchData from "@/helpers/FetchData";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSearchParams} from "next/navigation";

const SearchComponent = () => {
  const apiName = [
    "statements",
    "volunter_nac",
    "take",
    "comunity",
    "media",
    "involve",
    "press",
  ];
  const { cachedData } = FetchData(apiName);

  const [input, setInput] = useState("");
  const [api, setApi] = useState([]);
  const [results, setResults] = useState([]);
  const searchParams=useSearchParams()

  const query =searchParams?.get('q') ;
  

  function pushData() {
    for (const name of apiName) {
      let a = cachedData?.[name];
      if (a) {
        if (Array.isArray(a)) {
          a.map((item) => setApi((prev): any => [...prev, { [name]: item }]));
        } else {
          setApi((prev): any => [...prev, { [name]: a }]);
        }
      }
    }
  }
 

  useEffect(() => {
    pushData();
    setResults(api);
  }, [cachedData]);

  const handleChange = (e: any) => {
    e.preventDefault();

    setInput(e.target.value.toLowerCase());

    if (e.target.value === "") {
      setResults(api);
    }
  };
  useEffect(() => {
    let filterData = api?.filter((i: any) => {
      const values = Object.values(i);

      // Hər bir dəyər üçün axtarışı yerinə yetir
      const found = values.some((value: any) =>
        value?.title_en
          ? value?.title_en?.toLowerCase()?.includes(query)
          : value?.title_1_en?.toLowerCase()?.includes(query)
      );

      return found;
    });

    filterData?.length > 0 && setResults(filterData);
  }, [cachedData]);

  return (
    <>
      <div className="px-[100px] py-[20px]">
        <h2>{query}</h2>
        <input
          type="text"
          name="query"
          value={input}
          id="search"
          placeholder="Search"
          onChange={handleChange}
          required
          className="border-[1px] border-[#ccc] px-[20px] py-[10px] w-full outline-none mb-4"
        />

        {results.map((result: any, index) => (
          <div key={index}>
            {Object.keys(result).map((key) => {
              const value: any = result[key];
              const title = value?.title_en || value?.title_1_en;

              const charsToReplace = new RegExp(query);

              const newText = value?.intro_text_en
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
                      className="underline hover:text-red-600 tl"
                      href={`${key}/${value?.slug_en}`}
                    >
                      {title}
                    </Link>
                    <div
                      className="font-medium"
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
