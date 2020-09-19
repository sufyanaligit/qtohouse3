import axios from "axios";

const API = {
  getCurrentProjects: () => {
    return axios.get("https://qtohousemvcweb.qto.house/Qtohouse/GetProject");
  },
  getCurrentProjectDetails:id=>{
    return axios.get(`https://qtohousemvcweb.qto.house/Qtohouse/GetProjectDetail?id=${id}`);
  }
};

export default API;
