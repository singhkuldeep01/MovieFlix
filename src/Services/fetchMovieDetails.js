import axiosInstance from "../Helpers/AxiosInstance";

const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axiosInstance.get("", {
      params: { i: movieId }, // "i" is the query param for movie ID
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

export default fetchMovieDetails;
