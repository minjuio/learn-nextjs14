import { Suspense } from "react";
import { URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import {getMovie} from "../../../../components/movie-info";

interface iParams {
  params: {id:string};
}

export async function generateMetadata({params: {id}} : iParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title
  }
}

export default async function MovieDetail({ params: { id } }: iParams) {
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);

  // const [movie, video] = await Promise.all([getMovie(id), getVideos(id)])

  return <div>
    <Suspense fallback={<h1>Loading 1...</h1>}>
      <MovieInfo id={id} />
    </Suspense>
    <Suspense fallback={<h1>Loading 2 ...</h1>}>
      <MovieVideos id={id} />
    </Suspense>
  </div>
}