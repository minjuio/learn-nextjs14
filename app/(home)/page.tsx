import Link from "next/link";
import styles from "../../styles/home.module.css";
import Movie from "../../components/movie";
import { URL } from "../constants";

export const metadata = {
  title: "Home",
}

async function getMovies() {
  // return fetch(URL).then(res => res.json())
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map((m) => (
        <Movie key={m.title} title={m.title} id={m.id} poster_path={m.poster_path} />
      ))};
    </div>
  )
}