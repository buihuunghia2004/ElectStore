import InstanceAxios from "../helper/InstanceAxios"
import { ICategoryResponse } from "../types/ResponseTypes"

const getCategory = async () => {
 const res = await InstanceAxios.get('category')
 return res.data
}

export const categoryApi={
  getCategory
}