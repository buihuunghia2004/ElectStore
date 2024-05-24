import InstanceAxios from "../helper/InstanceAxios"

const getProducts = async () => {
  const result = await InstanceAxios.get('product')
  
  return result
}

export const productApi = {
  getProducts
}
