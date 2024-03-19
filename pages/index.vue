<style lang="scss" scoped></style>
<template>
  <div class="grid grid-cols-4 px-20 py-10">
    <div class="col-span-1 ml-2">
      <div class="mb-2">
      </div>
      <div class="my-2">
      </div>
      <div class="my-2">
      </div>
      <div class="my-2">
      </div>
    </div>
    <div class=" col-span-3 mr-2">
      <div class="card">
        <h2>فیلترهای اعمال شده</h2>
        
      </div>
      <div class="grid grid-cols-3 mt-3">
        <div class="mx-2" v-for="product in productList " :key="product.id">
          <ProductItem :data="product" />
        </div>
      </div>
    </div>
  </div>

</template>
<script lang="ts" setup>
import type { productDTO } from '~/types/productDTO';


definePageMeta({
  path: '/',
  // layout: 'default'
})

const productList = ref([
  {
    id: 0,
    title: 'test1',
    imageUrl: 'image',
    description: 'description2',
    stock: 5,
    categories: { name: 'مسکن و ساختمان' }
  },
  {
    id: 1,
    title: 'test1',
    imageUrl: 'image',
    description: 'description2',
    stock: 0,
    categories: { name: 'بهداشت و درمان' }
  },
  {
    id: 2,
    title: 'test1',
    imageUrl: 'image',
    description: 'description2',
    stock: 9,
    categories: { name: 'مسکن و ساختمان' }
  },
  {
    id: 3,
    title: 'test1',
    imageUrl: 'image',
    description: 'description2',
    stock: 44,
    categories: { name: 'صنعتی و کارخانه' }
  },
  {
    id: 4,
    title: 'test1',
    imageUrl: 'image',
    description: 'description2',
    stock: 3,
    categories: { name: 'صنعتی و کارخانه' }
  },
  {
    id: 5,
    title: 'test1',
    imageUrl: 'image',
    description: 'description2',
    stock: 12,
    categories: { name: 'صنعتی و کارخانه' }
  },
] as productDTO[])


</script>
