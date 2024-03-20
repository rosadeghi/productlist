<style scoped lang="scss">
</style>
<template>
    <div class="breadcrumb">
        <ul>
            <ol class="flex items-center whitespace-nowrap" aria-label="Breadcrumb">
                <li class="inline-flex items-center">
                    <a class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500"
                        href="/">
                        لیست محصولات
                    </a>
                </li>

                <li class="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-gray-200"
                    v-if="!!props.data" aria-current="page">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    {{ props.data.title }}
                </li>
            </ol>
        </ul>
    </div>
</template>
<script lang="ts" setup>
import type { productDTO } from '~/types/productDTO';
const router=useRouter()
const props = defineProps<{ data: productDTO }>()

const navigateTo = () => {
  router.push('/')
} 
</script>