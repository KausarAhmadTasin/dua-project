export default async function getDuas() {
  let duas = [];

  try {
    const res = await fetch("http://localhost:3000/api/dua");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    duas = await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      duas,
    },
  };
}
