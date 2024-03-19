import { useApi } from '~/composables/useApi';
import type { productDTO } from '~/types/productDTO';

const getcategories = async (): Promise<{ data: string[]}> => { 
  const { data }: any = await useApi(
    '/products/categories',
  )
  return { data: toRaw(data.value)  }
}
export default getcategories
