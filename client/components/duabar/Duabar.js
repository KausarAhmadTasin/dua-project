import fetchCategories from "@/lib/fetchCategory";
import fetchDua from "@/lib/fetchDua";
import fetchSubCategories from "@/lib/fetchSubCategory";
import { TbPointFilled } from "react-icons/tb";
import React from "react";
import Image from "next/image";

export default async function Duabarc() {
  const categories = await fetchCategories();
  const subCategories = await fetchSubCategories();
  const duas = await fetchDua();
  console.log(subCategories);
  console.log(categories);

  const handleCategory = (categoryId) => {
    const filteredSubCategories = subCategories.filter(
      (subCategory) => subCategory.cat_id === categoryId
    );
    return filteredSubCategories;
  };
  const handleSubCategory = (subCategoryId) => {
    const filteredDuaNames = duas.filter((dua) => {
      dua.subcat_id === subCategoryId;
      console.log(dua);
    });
    return filteredDuaNames;
  };

  return (
    <div className="bg-white w-80 ml-3 p-3 ">
      <p>Categories</p>
      {categories.map((category) => (
        <div key={category.id}>
          <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
            <Image
              src={`https://i.ibb.co/Km5k3WD/4b123749b99b0322305c72c5d565ddf3.png`}
              alt=""
              width={50}
              height={50}
              className="p-2 rounded-lg bg-gray-300"
            />
            <div>
              <h3 className="font-medium text-m text-green-500">
                {category.cat_name_en}
              </h3>
              <p className="text-sm text-gray-500">
                Subcategory: {category.no_of_subcat}
              </p>
            </div>
            <div className="text-center text-gray-500 ml-14">
              <p className="text-sm font-medium text-gray-700">
                {category.no_of_dua}
              </p>
              <p className="text-sm text-gray-500">Duas</p>
            </div>
          </div>
          <ul>
            {handleCategory(category.id).map((subCategory) => (
              <div className="flex">
                <div className="font-sm mt-1 text-green-500">
                  <TbPointFilled />
                </div>
                <li key={subCategory.id}> {subCategory.subcat_name_en}</li>
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
