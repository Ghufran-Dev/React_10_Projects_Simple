import Axios from "axios"
const Ax = Axios.create({
    // baseURL: process.env.REACT_APP_BASE_URL,
    baseURL: "http://localhost:9000",
    withCredentials:true,
})

export default Ax