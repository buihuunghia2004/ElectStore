import { Axios, AxiosResponse } from "axios"
import InstanceAxios from "../helper/InstanceAxios"
import {ILoginResponse} from '../types/authType'

const login = async (email:string, password:string) : Promise<ILoginResponse> => {
  const res = await InstanceAxios.post<{code:number[], status:boolean}>('user/login', { email, password })       
  console.log(res.data);
  
  return res.data
}

const register = async () => {

}

export const authenAPI = {
  login,
  register
}