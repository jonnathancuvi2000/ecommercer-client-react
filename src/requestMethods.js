import axios from "axios";
// this is the last url -> http://localhost:5000/api/
const BASE_URL = 'https://ecommerce-api-node.onrender.com/api/'
let TOKEN = '';
if (localStorage.getItem("persist:root") !== null) {
    const user_info = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser;
    if (user_info) {
        TOKEN = user_info.accessToken;
    }
    console.log("Localstorage is NOOOOOOOOOOT EMPTY")
} else {
    console.log("Localstorage is EMPTY")
}
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken);
// // const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzllNWJlOThiYTZkYzBhZGM2YmI2ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODQzNzY2NCwiZXhwIjoxNjY4Njk2ODY0fQ.PEXB5nTBYc8pp5x7RVEMtPPd-8RlHws1XPIz1yL-ibI'
console.log(TOKEN);

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Berear ${TOKEN}` }
});

export const userRequestPut = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Berear ${TOKEN}` }
});