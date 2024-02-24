// "use client";
// import React, { useEffect, useState } from "react";
// import { IoBulbOutline, IoShareSocialOutline } from "react-icons/io5";
// import { LuBookmark, LuCopy } from "react-icons/lu";
// import fetchDuas from "@/lib/fetchDua"; // Assuming fetchDuas is correctly imported

// const Allduas = () => {
//   const [duas, setDuas] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchDuas();
//         setDuas(data); // Assuming fetchDuas returns an array
//       } catch (error) {
//         console.error("Error fetching duas:", error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures this effect runs only once on component mount

//   return (
//     <div className="w-96">
//       <p>Hello</p>
//       <ul>
//         {duas.map((dua) => (
//           <li className="mb-4" key={dua.id}>
//             {dua.dua_name_en}
//             <p>{dua.top_en}</p>
//             <p>Reference: {dua.refference_en}</p>
//             {dua.translation_en && (
//               <p>
//                 <em>Transliteration: {dua.translation_en}</em>
//               </p>
//             )}
//             {dua.translation_en && (
//               <p>
//                 <em>Translation: {dua.translation_en}</em>
//               </p>
//             )}
//             <div>
//               <LuCopy />
//               <LuBookmark />
//               <IoBulbOutline />
//               <IoShareSocialOutline />
//               {/* You have to import BsExclamationOctagon from the appropriate library */}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Allduas;
