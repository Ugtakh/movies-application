import { useRouter } from "next/router";
import { Card } from "@mui/material";
export default function Movie({ movie }: any) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <Card>
      <div>
        <h2>{movie?.title}</h2>
        <picture>
          <img src={movie?.poster} alt="" />
        </picture>
      </div>
    </Card>
  );
}
async function getMovies() {
  const res = await fetch("http://localhost:8000/movies");
  const movies = await res.json();
  return movies.movies;
}

export async function getStaticPaths() {
  const movies = await getMovies();
  const paths = movies?.map((movie: any) => ({
    params: { _id: movie._id },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }: any) {
  const res = await fetch(`http://localhost:8000/movies/${params._id}`);
  const movie = await res.json();
  return { props: { movie } };
}
