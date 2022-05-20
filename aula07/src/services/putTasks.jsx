import { api } from "./baseUrl";


const PutTask = async (id, data) => {
    try {
        await api.put(`TODO/${id}`, data); 
    } catch (error) {
        alert(error);
    }
}

export default PutTask;