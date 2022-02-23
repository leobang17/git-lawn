import axios from "axios";

const GitAPI = axios.create({
  baseURL: "https://api.github.com",
  timeout: 5000,
});

export default GitAPI;
