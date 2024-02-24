export default async function fetchSubCategories() {
  try {
    const response = await fetch("http://localhost:3000/api/sub_category");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("API did not return JSON");
    }

    const subCategories = await response.json();
    return subCategories;
  } catch (error) {
    console.error("Error fetching sub-categories:", error);
    return []; // or handle error in a different way
  }
}
