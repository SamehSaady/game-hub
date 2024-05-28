import genreService, { Genre } from "../services/genre-service";
import useDataFetcher from "./useDataFetcher";

const useGenresFetcher = () => {
  const { data, error, isLoading } = useDataFetcher<Genre>(genreService);

  return { genres: data.results, error, isLoading };
};

export default useGenresFetcher;
