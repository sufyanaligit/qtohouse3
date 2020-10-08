import axios from 'axios';
import qs from 'qs';
const BASE_URL = 'http://qtohousemvcweb.qto.house/Qtohouse/';

const API = {
  getCurrentProjects: () => {
    return axios.get(`${BASE_URL}/GetProject`);
  },
  getCurrentProjectDetails: (id) => {
    return axios.get(`${BASE_URL}/GetProjectDetail?id=${id}`);
  },

  addProject: (project) => {
    const data = { projectObj: JSON.stringify(project) };
    return axios
      .post(`${BASE_URL}/SaveProject`, qs.stringify(data))
      .then((res) => {
        return res.data;
      });
  },
  validateLogin: ({ userName, password }) => {
    const data = {
      projectObj: JSON.stringify({
        userName: userName,
        password: password,
      }),
    };
    return axios
      .post(
        `http://qtohousemvcweb.qto.house/UserAuth/Login`,
        qs.stringify(data)
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  },
};

export default API;
