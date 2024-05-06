import { getDeparments, mapDeparments } from "@/api/deparments";
import { useState, useEffect } from "react";

const useDeparments = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDataFromApi = async () => {
    try {
      const result = await getDeparments();
      setData(mapDeparments(result));
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

export default useDeparments;
