import { api } from "./baseUrl"


export const GetFilmes = async () => {
    try {
        const response = await api.get("?apikey=fd904a8f&s=piratas");
        return response.data.Search;
    } catch (error) {
        console.error(error);
    }

}