import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS, URL } from "../utils/constant";

const Browse = () => {
  const getMovieList = async () => {
    const data = await fetch(URL, API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
