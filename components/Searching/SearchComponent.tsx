import FetchData from "@/helpers/FetchData";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
          ? value?.title_en?.toLowerCase()?.includes(input)
          : value?.title_1_en?.toLowerCase()?.includes(input)
      );

      return found;
    });

    filterData?.length > 0 && setResults(filterData);

    console.log(filterData);
    // console.log(results);
  }, [input]);

  return (
    <>
      <div className="search">
        <input
          type="text"
          name="query"
          value={input}
          id="search"
          placeholder="Search"
          onChange={handleChange}
          required
        />
        {results.map((result: any, index) => (
          <div key={index}>
            {Object.keys(result).map((key) => {
              const value: any = result[key];
              const title = value?.title_en || value?.title_1_en;

              const charsToReplace = new RegExp(input);

              const newText = value?.intro_text_en?.replace(
                charsToReplace,
                `<span class="bg-red-600 text-white">${input}</span>`
              );

              return (
                <div key={key}>
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
