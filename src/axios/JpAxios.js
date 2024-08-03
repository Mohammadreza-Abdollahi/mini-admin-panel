import axios from "axios";

export const JpAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 15000,
    timeoutErrorMessage: 'زمان پاسخگویی بیشتر از 15 ثانیه طول کشید!'
})