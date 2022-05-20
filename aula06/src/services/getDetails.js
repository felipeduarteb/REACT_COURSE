import { api } from './baseUrl';

export const GetDetails = async (id) => {
    try {
        const response = await api.get(`?apikey=fd904a8f&i=${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}