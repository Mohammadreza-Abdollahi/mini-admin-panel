import axios from "axios";

export const JpAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 5000,
    timeoutErrorMessage: 'زمان پاسخگویی بیشتر از 5 ثانیه طول کشید!'
})