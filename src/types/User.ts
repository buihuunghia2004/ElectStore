import { ICart } from "./Cart";

export interface IUser{
  _id:string,
  userName:string,
  email:string,
  // cart:ICart,
  token:string
}