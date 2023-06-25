import Axios from 'axios'
import {API_APP} from "./CONSTANTS";

const axios = Axios.create({
    baseURL: API_APP,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios
