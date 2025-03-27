import Link from "next/link";

export const metadata = {
  title: "Home",
}

export const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // return fetch(URL).then(res => res.json())
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function HomePage(){
  const movies = await getMovies();

  return <div>
    {movies.map((m)=> <li><Link href={`/movies/${m.id}`}>{m.title}</Link></li>)};
  </div>
}