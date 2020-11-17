import axios from 'axios';
import qs from 'qs';
//const BASE_URL = 'http://localhost/DFW.WEBFRONTEND';
const BASE_URL = 'http://qtohousemvcwebdev.qto.house';

const API = {
  getProjects: (searchPayload) => {
    const data = { projectObj: JSON.stringify(searchPayload) };
    return axios.post(`${BASE_URL}/Qtohouse/GetProject`, qs.stringify(data));
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
    const data = { projectObj: JSON.stringify(request) };
    return axios
      .post(`${BASE_URL}/UserAuth/SaveUser`, qs.stringify(data))
      .then((res) => {
        return res.data;
      });
  },
  verifyCode: (request) => {
    return axios
      .get(
        `${BASE_URL}/userauth/VerifyRegistrationCode?loginId=${request.userName}&verificationCode=${request.code}`
      )
      .then((res) => res.data);
  },
  uploadImage: (fileObj) => {
    let data = new FormData();
    data.append(fileObj.data.name, fileObj.data);

    return axios
      .post(`${BASE_URL}/Qtohouse/UploadImage`, data, {
        headers: {
          accept: 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        },
      })
      .then((res) => res.data);
  },
};

export default API;
