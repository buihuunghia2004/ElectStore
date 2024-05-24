export interface Category{
  _id:string,
  code:string,
  codeName:string,
  image:string,
  brands:{code:string,codeName:string}[],
  configInfo:{code:string,codeName:string}[]
}
export interface Product{
  _id:string,
  productName:string,
  image:string,
  price:number,
  rate:number,
  brand:{code:string,codeName:string}
}