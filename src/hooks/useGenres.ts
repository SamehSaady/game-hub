import genreService, { Genre } from "../services/genre-service";
import useData from "./useData";

const useGenres = () => {
  const { data, error, isLoading } = useData<Genre>(genreService);

  return { genres: data, error, isLoading };
};

export default useGenres;
