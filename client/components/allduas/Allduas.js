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
  console.log(allDuas);
  return (
    <div className="ml-6 overflow-auto h-[86vh] text-gray-800">
      <ul className="">
        {allDuas.map((dua) => (
          <li className="mb-4 bg-white p-5 rounded-2xl mr-0 width" key={dua.id}>
            <div className="flex text-green-500 font-semibold text-lg items-center gap-3">
              {" "}
              <CiCircleCheck className="font-bold text-2xl" />
              <p>
                {" "}
                {dua.id}. {dua.dua_name_en}
              </p>
            </div>
            <p className="mt-3">{dua.top_en}</p>
            {dua.dua_arabic && (
              <p className="text-2xl mt-4 mb-4 dua-arabic">{dua.dua_arabic}</p>
            )}
            {dua.translation_en && (
              <p className="mb-3">
                <em>
                  {" "}
                  <strong>Transliteration:</strong> {dua.translation_en}
                </em>
              </p>
            )}
            {dua.translation_en && (
              <p className="mb-4">
                {" "}
                <strong>Translation:</strong> {dua.translation_en}
              </p>
            )}
            <p className="mt-3">
              <span className="text-green-500 font-semibold">Reference: </span>
              <br />
              {dua.refference_en}
            </p>
            <div>
              {dua.audio && (
                <audio controls className="mt-4 mb-4">
                  <source src={dua.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>
            <div className="flex justify-end text-xl text-gray-400 gap-4 mt-3">
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
