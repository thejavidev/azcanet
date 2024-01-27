"use client";
import FetchData from "@/helpers/FetchData";
import { Get } from "@/services/fetchServices";
import { useEffect, useState } from "react";

const page = () => {
  const [api, setApi] = useState([]);
  const [search, setSearch] = useState(api);

  useEffect(() => {
    Get()?.then((data) => {
      setApi(data?.volunter_nac);
      setSearch(data?.volunter_nac);
    });
  }, []);

  const Filter = (event: any) => {
    setSearch(
      api?.filter((fil) =>
        fil?.title_en?.toLowerCase().includes(event.target.value)
      )
    );
  };
  console.log(search);

  return (
    <div className="mt-[100px]">
      searching
      <input type="text" onChange={Filter} />
      <button type="button">Axtar</button>
      <ul>
        {search?.map((item: any, i: number) => (
          <li key={i}>{item?.title_en}</li>
        ))}
      </ul>
    </div>
  );
};

export default page;
