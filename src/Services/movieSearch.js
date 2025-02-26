import axiosInstance from "../Helpers/AxiosInstance";

const movieSearch = async (searchTerm, page) => {
    try {
        const response = await axiosInstance.get("", {
            params: { 
                s: searchTerm,
                page: page
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching movies:", error);
        return null;
    }
};

export default movieSearch;