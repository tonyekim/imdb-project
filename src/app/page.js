import Result from "@/components/Result";
import React from "react";
const API_KEY = process.env.API_KEY;

const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const results = data.results;

  return (
    <div>
      <Result results={results} />
    </div>
  );
};

export default Home;
