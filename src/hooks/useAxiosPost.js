import { useState } from "react";
import axiosInstance from "../constants/api";

const useAxiosPost = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (url, body, config) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.post(url, body, config);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { data, loading, error, postData };
};

export default useAxiosPost;
