import { api } from "./baseUrl";

const addTask = async (data) => {
    try {
        console.log(data);
        await api.post("TODO", data);
    } catch (error) {
        alert(error);
    }
}

export default addTask;