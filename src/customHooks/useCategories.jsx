import { getCategories, mapCategories } from "@/api/category";
import { useState, useEffect } from "react";

const useCategories = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await getCategories();
        setData(mapCategories(result));
      } catch (error) {
        setData([]);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);

  return { data, isLoading, error };
};

export default useCategories;
