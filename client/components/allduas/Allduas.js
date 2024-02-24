import fetchDuas from "@/lib/fetchDua";
import { IoBulbOutline, IoShareSocialOutline } from "react-icons/io5";
import { LuBookmark, LuCopy } from "react-icons/lu";

const Allduas = async () => {
  const duas = await fetchDuas();
  return (
    <div className="w-96">
      <p>Hello</p>
      <ul>
        {duas.map((dua) => (
          <li className="mb-4" key={dua.id}>
            {dua.dua_name_en}
            <p>{dua.top_en}</p>
            <p>Reference: {dua.refference_en}</p>
            {dua.translation_en && (
              <p>
                <em>Transliteration: {dua.translation_en}</em>
              </p>
            )}
            {dua.translation_en && (
              <p>
                <em>Translation: {dua.translation_en}</em>
              </p>
            )}
            <div className="flex">
              <LuCopy />
              <LuBookmark />
              <IoBulbOutline />
              <IoShareSocialOutline />
              {/* You have to import BsExclamationOctagon from the appropriate library */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Allduas;
