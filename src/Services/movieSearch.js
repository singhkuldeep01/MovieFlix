import axiosInstance from "../Helpers/AxiosInstance";

const movieSearch = async (searchTerm) => {
    try {
        const response = await axiosInstance.get("", {
            params: { s: searchTerm },
        });
        return response.data; // ✅ Return the API response
    } catch (error) {
        console.error("Error fetching movies:", error);
        return null; // ✅ Return null or throw error if needed
    }
};

export default movieSearch;
