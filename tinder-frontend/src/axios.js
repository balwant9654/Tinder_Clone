import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinderapplicationavailable.herokuapp.com",
});

export default instance;
