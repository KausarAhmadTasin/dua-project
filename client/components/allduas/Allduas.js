import { IoBulbOutline, IoShareSocialOutline } from "react-icons/io5";
import { LuBookmark, LuCopy } from "react-icons/lu";
import { BsExclamationOctagon } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import Image from "next/image";

const Allduas = async ({ duas, filteredDuas }) => {
  let allDuas = [];

  if (filteredDuas.length > 0) {
    allDuas = filteredDuas;
  } else {
    // Handle case when filteredDuas is empty, show allDuas
    allDuas = await duas.props.duas;
  }

  return (
    <div className="ml-6 overflow-auto h-[90vh]">
      <ul className="">
        {allDuas.map((dua) => (
          <li className="mb-4 bg-white p-7 rounded-2xl mr-0 width" key={dua.id}>
            <div className="flex text-green-500 font-semibold items-center gap-3">
              {" "}
              <CiCircleCheck className="font-bold text-2xl" />
              <p>
                {" "}
                {dua.id}. {dua.dua_name_en}
              </p>
            </div>
            <p>{dua.top_en}</p>
            <p>Reference: {dua.refference_en}</p>
            {dua.translation_en && (
              <p>
                <em>
                  {" "}
                  <strong>Transliteration:</strong> {dua.translation_en}
                </em>
              </p>
            )}
            {dua.translation_en && (
              <p>
                <em>
                  {" "}
                  <strong>Translation:</strong> {dua.translation_en}
                </em>
              </p>
            )}
            <div className="flex">
              <LuCopy />
              <LuBookmark />
              <IoBulbOutline />
              <IoShareSocialOutline />
              <BsExclamationOctagon />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Allduas;
