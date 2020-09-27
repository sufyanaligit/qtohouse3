import axios from 'axios';
const BASE_URL = 'http://qtohousemvcweb.qto.house/Qtohouse';
const API = {
  getCurrentProjects: () => {
    return axios.get(`${BASE_URL}/GetProject`);
  },
  getCurrentProjectDetails: (id) => {
    return axios.get(`${BASE_URL}/GetProjectDetail?id=${id}`);
  },
  addProject: (project) => {
    return axios.post(`${BASE_URL}/SaveProject`, project).then((res) => {
      debugger;
      console.log(res);
    });
  },
};

export default API;
