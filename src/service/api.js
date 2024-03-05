
import axios from "axios";


const url = "http://localhost:3001/";

export const getallCompetitions = async (id) => {
    id = id || "";
    return await axios.get(`${url}/${id}`);
};