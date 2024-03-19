<style lang="scss" scoped>

</style>
<template>
    <div class="card">
        <img :src="data?.image"
            alt="">
        <h4 class="my-3">{{ data.title }}</h4>
        <!-- <p>{{ data.categories.name }}</p> -->
        <button class="button-o" @click="details(data.id)">مشاهده جزییات
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="red" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
        </button>
    </div>
</template>
<script lang="ts" setup>
import type { productDTO } from '~/types/productDTO';

const router = useRouter()
const props=defineProps<{data:productDTO}>()
console.log(props.data);

const details = (value: any) => {
  router.push({
    path: `/${value}`,
  })
}
</script>
