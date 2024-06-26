// A generic data fetching hook.
import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import { FetchResponse, HttpService } from "../services/http-service";
import { AxiosRequestConfig } from "axios";

// <T> is the Entity to store its objects in the hook.
const useDataFetcher = <T>(
  service: HttpService<T>,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<FetchResponse<T>>({ count: 0, results: [] });
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      setLoading(true);

      const { request, cancel } = service.getAll(requestConfig);

      request
        .then((res) => {
          setData({ count: res.data.count, results: res.data.results });
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return cancel;
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useDataFetcher;
