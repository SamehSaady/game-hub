import platformService, { Platform } from "../services/platform-service";
import useDataFetcher from "./useDataFetcher";

const usePlatformsFetcher = () => {
  const { data, error, isLoading } = useDataFetcher<Platform>(platformService);

  return { platforms: data, error, isLoading };
};

export default usePlatformsFetcher;
