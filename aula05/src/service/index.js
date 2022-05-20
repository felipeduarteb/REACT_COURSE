import { api } from './UrlBase';

export const GetMovie = async () => {
    try {
        const movie = await api.get("?apikey=fd904a8f&s=piratas");
        return movie.data.Search;
    } catch (error) {
        alert('Deu o seguinte erro: ', error);
    }
}