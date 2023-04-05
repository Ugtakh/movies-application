import { useRouter } from "next/router";
import React from "react";

const Movie = () => {
  const obj = useRouter();
  console.log(obj);
  return <div>Movie</div>;
};

export default Movie;
