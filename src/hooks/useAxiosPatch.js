import { useState } from "react";
import axiosInstance from "../constants/api";

const useAxiosPatch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const patchData = async (url, body) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.patch(url, body);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { data, loading, error, patchData };
};

export default useAxiosPatch;
