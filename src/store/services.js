import axios from "axios";

const API = {
  getCurrentProjects: () => {
    return axios.get("https://qtohousemvcweb.qto.house/Qtohouse/GetProject");
  },
};

export default API;
