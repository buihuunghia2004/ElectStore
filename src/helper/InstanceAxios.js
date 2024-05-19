import axios from 'axios'
import environment from '../config/environment';


const InstanceAxios = axios.create({
  baseURL: environment.BASE_URL
})

InstanceAxios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
)

InstanceAxios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return error.response
  }
);



export default InstanceAxios