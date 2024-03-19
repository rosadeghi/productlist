import { useApi } from '~/composables/useApi';
import type { productDTO } from '~/types/productDTO';

const getProducts = async (id:number): Promise<{ data: productDTO}> => { 
  const { data }: any = await useApi(
    `/products/${id}`,
  )
  return { data: toRaw(data.value)  }
}

export default getProducts
