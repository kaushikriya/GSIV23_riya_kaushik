import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const useGetMovies = () => {
  const fetchQueryFn = async () => {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response;
  };
  const { data } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchQueryFn,
  });

  return data;
};
