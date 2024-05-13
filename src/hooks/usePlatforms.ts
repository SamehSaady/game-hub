import platformService, { Platform } from "../services/platform-service";
import useData from "./useData";

const usePlatforms = () => {
  const { data, error, isLoading } = useData<Platform>(platformService);

  return { platforms: data, error, isLoading };
};

export default usePlatforms;
