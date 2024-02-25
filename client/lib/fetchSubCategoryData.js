export default async function fetchSubCategoryData(subCategoryId) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/sub_category/${subCategoryId}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching subcategory data:", error);
    return null;
  }
}
