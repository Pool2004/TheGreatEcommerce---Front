import { getCategories, mapCategories } from "@/api/category";
import { useState, useEffect } from "react";

const useCategories = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  return { data, isLoading, error };
};

export default useCategories;
