import { api } from "./baseUrl";

export const  deleteTask = async (dataId) => {
    try {
        await api.delete(`TODO/${dataId}`);
    } catch (error) {
        alert(error);
    }
}

export default deleteTask;