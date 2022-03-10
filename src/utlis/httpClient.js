import cookie from 'react-cookies';
import axios from 'axios';

require('dotenv').config();

const httpClient = ({method, url, data, responseType}) => {
    return axios({
        method,
        url,
        data,

        responseType,
    });
};

export default httpClient;