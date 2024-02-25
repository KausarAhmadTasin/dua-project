"use client";
import Allduas from "@/components/allduas/Allduas";
import Duabar from "@/components/duabar/Duabar";
import getDuas from "@/lib/fetchDua";
import { useState } from "react";

export default async function Home() {
  const [filteredDuas, setFilteredDuas] = useState([]);
  const duas = await getDuas();
  // console.log(duas);

  const getfilteredDuas = (cat_id) => {
    filteredDuas.length = 0;
    const duaFilter = duas.props.duas.filter((dua) => dua.cat_id === cat_id);
    // filteredDuas.push(duaFilter);
    // setFilteredDuas(duaFilter);
    // console.log(duaFilter);
  };
  return (
    <>
      <div className="flex">
        <Duabar getfilteredDuas={getfilteredDuas} />
        <Allduas duas={duas} filteredDuas={filteredDuas} />
      </div>
    </>
  );
}
