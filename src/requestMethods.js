import axios from "axios";

const BASE_URL = 'http://localhost:5000/api/'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzllNWJlOThiYTZkYzBhZGM2YmI2ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODQzNzY2NCwiZXhwIjoxNjY4Njk2ODY0fQ.PEXB5nTBYc8pp5x7RVEMtPPd-8RlHws1XPIz1yL-ibI'

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Berear ${TOKEN}` }
});