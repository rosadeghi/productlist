import type { UseFetchOptions } from 'nuxt/app'
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

export async function useApi<T>(
  url: string,
  params?: any,
  base: string = 'master',
  method: 'get' | 'get' = 'get'
) {

  const headers = ref<{ [key: string]: string }>({
    // Authorization: 'JWT ' + token.value,
  })

  const baseURLs: Record<string, string> = {
    rapid: 'https://fakestoreapi.com/',
  }

  const baseURL = baseURLs[base] || 'https://fakestoreapi.com'

  const defaults: UseFetchOptions<T> = {
    baseURL: baseURL,
    method: method,
    key: url,
    body: params,
    headers: headers.value,
  }
  await nextTick()
  const { data } = await useLazyFetch(url, defaults)

  return { data }
}

