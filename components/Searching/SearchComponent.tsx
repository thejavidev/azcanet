import FetchData from "@/helpers/FetchData";
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
          a.map((item) => setApi((prev): any => [...prev, item]));
        } else {
          setApi((prev): any => [...prev, a]);
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
    let filterData = api?.filter((i: any) =>
      i?.title_en
        ? i?.title_en?.toLowerCase()?.includes(input)
        : i?.title_1_en?.toLowerCase()?.includes(input)
    );

    filterData?.length > 0 && setResults(filterData);
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
        {results.map((result: any, index) => {
          return (
            <div className="results" key={index}>
              {result?.title_en && (
                <h2>
                  {index} -- {result?.title_en}
                </h2>
              )}
              {result?.title_1_en && (
                <h2>
                  {index} -- {result?.title_1_en}
                </h2>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchComponent;
