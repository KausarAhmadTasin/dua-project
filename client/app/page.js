"use client";
import Allduas from "@/components/allduas/Allduas";
import Duabar from "@/components/duabar/Duabar";
import getDuas from "@/lib/fetchDua";

export default async function Home() {
  let filteredDuas = [];
  const duas = await getDuas();
  // console.log(duas);

  const getfilteredDuas = (cat_id) => {
    filteredDuas.length = 0;
    const duaFilter = duas.props.duas.filter((dua) => dua.cat_id === cat_id);
    // filteredDuas.push(duaFilter);
    console.log(filteredDuas);
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
