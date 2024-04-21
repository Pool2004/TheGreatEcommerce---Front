import { getSizes, mapSizes } from "@/api/size";
import { useState, useEffect } from "react";

const useSizes = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await getSizes();
        setData(mapSizes(result));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);

  return { data, isLoading, error };
};

export default useSizes;
