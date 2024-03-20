<style scoped lang="scss"></style>
<template>
    <div class="my-4">
        <SharedBreadcrumb :data="product" />
    </div>
    <div class="card">
        <h1>{{ product.title }} </h1>
        <div class="image-large" :style="`background-image: url('${product.image}')`"></div>
    </div>
    <div class="card my-4">
        <h1>مشخصات فنی</h1>
        <div class="grid grid-cols-4 my-2">
            <div class="col-span-1 ml-2 title-wrapper">
                <small class="">قیمت</small>
            </div>
            <div class="col-span-3 mr-2 description-wrapper">
                <strong class="">{{ product?.price }}</strong>
            </div>
        </div>
        <div class="grid grid-cols-4 my-2">
            <div class="col-span-1 ml-2 title-wrapper">
                <small class="">توضیحات </small>
            </div>
            <div class="col-span-3 mr-2 description-wrapper">
                <strong class="">{{ product?.description }}</strong>
            </div>
        </div>
        <div class="grid grid-cols-4 my-2">
            <div class="col-span-1 ml-2 title-wrapper">
                <small class="">دسته بندی</small>
            </div>
            <div class="col-span-3 mr-2 description-wrapper">
                <strong class="">{{ product?.category }}</strong>
            </div>
        </div>
        <div class="grid grid-cols-4 my-2">
            <div class="col-span-1 ml-2 title-wrapper">
                <small class="">رتبه</small>
            </div>
            <div class="col-span-3 mr-2 description-wrapper">
                <strong class="">{{ product?.rating?.rate }}</strong>
            </div>
        </div>
        <div class="grid grid-cols-4 my-2">
            <div class="col-span-1 ml-2 title-wrapper">
                <small class="">تعداد</small>
            </div>
            <div class="col-span-3 mr-2 description-wrapper">
                <strong class="">{{ product?.rating?.count }}</strong>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { productDTO } from '~/types/productDTO';
const route = useRoute()
if (process.client) {
    _getProduct(+route.params.productid)
}
const product = ref({} as productDTO)

async function _getProduct(id: number) {
    const { data } = await getProduct(id)
    product.value = data
}

</script>