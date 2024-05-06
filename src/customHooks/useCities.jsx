import { getCities, mapCities } from "@/api/cities";
import { useState, useEffect } from "react";

const useCities = ({ state }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDataFromApi = async () => {
    try {
      const result = await getCities();
      setData(mapCities(result, state));
    } catch (error) {
      setData([]);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFromApi();
  }, [state]);

  return { data, isLoading, error };
};

export default useCities;
