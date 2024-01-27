import FetchData from "@/helpers/FetchData";
import React, { useState } from "react";

const SearchComponent = () => {
  const { cachedData } = FetchData([
    "statements",
    "volunter_nac",
    "take",
    "comunity",
    "media",
    "involve",
    "press",
  ]);

  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e: any) => {
    e.preventDefault();
    setInput(e.target.value.toLowerCase());
  };
  console.log(cachedData);
  

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
        />
        {results
          ?.filter((i) => i?.title_en.toLowerCase().includes(input))
          .map((result, index) => {
            return (
              <div className="results" key={index}>
                <h2>{result?.title_en}</h2>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default SearchComponent;
