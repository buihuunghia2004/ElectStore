export interface IBrand{
  name:string,
  image:string
} 
export interface ICategory{
  _id:string,
  name:string,
  image:string,
  filterList:[{
    code:string,
    name:string,
    values:[{
      code:string,
      name:string
    }]
  }]
}
