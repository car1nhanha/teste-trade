import axios from "axios";

export const fetchData = async (url: string, queryes = "") => {
  const key = localStorage.getItem("key");
  const response = await axios.get(
    `https://v3.football.api-sports.io/${url}${queryes}`,
    {
      headers: {
        "X-RapidAPI-Key": key,
        "x-rapidapi-host": "v3.football.api-sports.io",
      },
    }
  );

  if (!response.data) {
    throw new Error(`Error fetching data from ${url}`);
  }

  return response.data;
};
// a78eb3c5928d30381c3601be90a5e5b3
