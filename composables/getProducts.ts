import { useApi } from '~/composables/useApi';
import type { productDTO } from '~/types/productDTO';
import type { productParametr } from '~/types/productParametr';

const getProducts = async (params: productParametr): Promise<{ data: productDTO[] }> => {
  const paramBuilder = `sort=${params.sort}&category=${params.category}`;
  const { data }: any = await useApi(
    `/products?${paramBuilder}`,
  )
  return { data: toRaw(data.value) }
}
export default getProducts
