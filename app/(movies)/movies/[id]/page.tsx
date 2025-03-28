import { Suspense } from "react";
import { URL } from "../../../constants";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { getMovie } from "../../../../components/movie-info";

// interface iParams {
//   params: { id: string };
// }

type iParams = Promise<{ id: string; }>;

export async function generateMetadata(props: { params: iParams }) {
  const params = await props.params;
  const movie = await getMovie(params.id);
  return {
    title: movie.title
  }
}

export default async function MovieDetail(props: { params: iParams }) {
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);

  // const [movie, video] = await Promise.all([getMovie(id), getVideos(id)])
  const params = await props.params;
  
  return <div>
    <Suspense fallback={<h1>Loading 1...</h1>}>
      <MovieInfo id={params.id} />
    </Suspense>
    <Suspense fallback={<h1>Loading 2 ...</h1>}>
      <MovieVideos id={params.id} />
    </Suspense>
  </div>
}