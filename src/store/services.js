import axios from 'axios';
import qs from 'qs';
const BASE_URL = 'http://qtohousemvcweb.qto.house';

const API = {
  getCurrentProjects: () => {
    return axios.get(`${BASE_URL}/Qtohouse/GetProject`);
  },
  getCurrentProjectDetails: (id) => {
    return axios.get(`${BASE_URL}/Qtohouse/GetProjectDetail?id=${id}`);
  },

  addProject: (project) => {
    const data = { projectObj: JSON.stringify(project) };
    return axios
      .post(`${BASE_URL}/Qtohouse/SaveProject`, qs.stringify(data))
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
      .post(`${BASE_URL}/UserAuth/Login`, qs.stringify(data))
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  },
  validateUserSession: ({ userId }) => {
    return axios.get(
      `${BASE_URL}/UserAuth/GetUserByCriteria?loginId=${userId}`
    );
  },
  registerUser: async (registerUser) => {
    const data = { projectObj: JSON.stringify(registerUser) };
    return await axios.post(
      `${BASE_URL}/UserAuth/SaveUser`,
      qs.stringify(data)
    );
  },
  getPendingUserApprovals: () => {
    return axios.get(`${BASE_URL}/UserAuth/GetUser`).then((res) => res.data);
  },
  approvePendingStatus: (request) => {
    debugger;
    const data = { projectObj: JSON.stringify(request) };
    return axios.post(`${BASE_URL}/UserAuth/SaveUser`, qs.stringify(data));
  },
};

export default API;
