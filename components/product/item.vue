<style lang="scss" scoped>

</style>
<template>
    <div class="card">
        <img src="https://s3-alpha-sig.figma.com/img/98ec/e812/9d977f7c791b588cf59fb440a687397a?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AHudK0qtsIGGhss74BlShfOFTk9Gj31aWVhDpQiOf6D9pgXs0RX24pCHfzmPADLWxynk5L~APBR-fpbWE2RpXK4ivtnjyaCAbmODmebvmUri9JsCZ3QjMcD~ngrFKQ95ClHxqL7wgR2BSJfLxlDHrdl3MtLf5-VsI0x2sdTph5ybVhWgxiIG9Fm-QjCu4KhakE533CQAXlCGGwugiMGH4SKFhc3NRaK8CAhVUaBwYYF2yishhWh9u5hc7BpToF~hHw9jG0o5n3rBMC6O-HBhVYFFDeQfDgk4Wyk-~C-e1f~9Kpk26vuU~iQikQLPrhbrVV8mkqrmFYEuyylVCvXtmg__"
            alt="">
        <h4 class="my-3">{{ data.title }}</h4>
        <p>{{ data.stock }}</p>
        <p>{{ data.categories.name }}</p>
        <button class="button-o" @click="details(1)">مشاهده جزییات
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
const details = (value: any) => {
  router.push({
    path: `/${value}`,
  })
}
</script>
