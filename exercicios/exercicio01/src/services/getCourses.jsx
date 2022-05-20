import api from './baseUrl';

export const getCourses = async () => {
    try {
        const response = await api.get('course');
        return response.data;
    } catch (error) {
        alert(error);
    }
}