export interface ICategoryResponse{
  _id:string,
  code:string,
  codeName:string,
  image:string,
  brands:{code:string,codeName:string}[],
  configInfo:{code:string,codeName:string}[]
}