export default async function fetchDuas() {
  try {
    const response = await fetch("http://localhost:3000/api/dua");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("API did not return JSON");
    }

    const duas = await response.json();
    return duas;
  } catch (error) {
    console.error("Error fetching duas:", error);
    return []; // or handle error in a different way
  }
}
