// A generic data fetching hook.
import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import { HttpService } from "../services/http-service";

// <T> is the Entity to store its objects in the hook.
const useData = <T>(service: HttpService<T>) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const { request, cancel } = service.getAll();

    request
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return cancel;
  }, []);

  return { data, error, isLoading };
};

export default useData;
