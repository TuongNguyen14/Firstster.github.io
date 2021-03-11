import axios from "axios";
import ApiResult from '../models/ApiResult'

var model = new ApiResult();
export async function Get(url, params) {
    try {
        const response = await axios.get(url, { params });
        console.log(response)
        if (response && response.status === 200) {
            return response.data;
        }
    }
    catch (e) {
        return e;
    }
}

export async function Post(url, obj) {
    try {
        const response = await axios.post(url, obj);
        if (response && response.status === 200) {
            model = Object.assign(model, response.data);
            return model;
        }
    }
    catch (e) {
        throw e;
    }
}