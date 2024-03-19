import { useApi } from '~/composables/useApi';
import type { productDTO } from '~/types/productDTO';

const getProducts = async (): Promise<{ data: productDTO[]}> => { 
  const { data }: any = await useApi(
    '/products',
  )
  return { data: toRaw(data.value)  }
}
export default getProducts
