import axios from "axios";

const Api = axios.create({
  baseURL: "//localhost:8000/api/",
});

export default Api;
