<style lang="scss" scoped>
.selected-filter {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
<template>
  <div class="grid grid-cols-4">
    <div class="col-span-1 ml-2">
      <div class="mb-2">
        <SharedSearch  :data="products" @searchResult="searchResult"/>
      </div>
      <div class="my-3">
        <SharedSortFilter @descCount="sortrList" @ascCount="sortrList" @descLevel="sortrList" @ascLevel="sortrList">
        </SharedSortFilter>
      </div>
      <div class="my-3">
        <SharedCategories />
      </div>
    </div>
    <div class="col-span-3 mr-2">
      <div class="card selected-filter">
        <h3>فیلترهای اعمال شده</h3>
        <div>
          <div class="chips">
            <label>{{filteredByTitle}} </label>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-3 mt-3">
        <div class="mx-2 my-2" v-for="product in products " :key="product.id">
          <ProductItem :data="product" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { productDTO } from '~/types/productDTO';
import type { productParametr } from '~/types/productParametr';

definePageMeta({
  path: '/',
  layout: "default"
})

const products = ref([] as productDTO[])


const list = ref(products.value as productDTO[]);

// Filter Functions
const sortModule = (filterItem: string, list: productDTO[]) => {
  switch (filterItem) {
    case "asc":
      return list.map(i => {
        return i.rating.count
      }).
        sort((a: any, b: any) => {
          return a - b
        })
    case "desc":
      return list.map(i => {
        return i.rating.count
      }).sort((a: any, b: any) => {
        return b.stock - a.stock
      })
    case "upRate":
      return list.map(i => {
        return i.rating.rate
      }).sort((a: any, b: any) => {
        return a.stock - b.stock
      })
    case "lowRate":
      return list.map(i => {
        return i.rating.rate
      }).sort((a: any, b: any) => {
        return b.stock - a.stock
      })
    default:
      return list
  }
}
const categouryModule = (filterItem: string, list: productDTO[]) => {
  return list.filter(item => item.category === filterItem)
}

// Filtered Response Data
async function sortrList(filtredItem: string) {
  const req = {
    sort: filtredItem,
  } as productParametr
  const { data } = await getProducts(req)
  products.value = data
  const sortList = sortModule(filtredItem, products.value);
  list.value = [...sortList]
}

const categouryList = (filterItem: string) => {
  console.log("filterItemfilterItemfilterItem", filterItem);

  const catList = categouryModule(filterItem, products.value);
  console.log(catList);

  list.value = [...catList]
}
const test = ["test1", "test2", "test3"]
const testFunc = (filterlist: string[], list: string[]) => {
  return list.map(item => {
    return filterlist.map(node => {
      return item === node
    })
  })
}

const result = testFunc(test, [])
if (process.client) {
  _getProducts()
}

async function _getProducts() {
  const req = {
    sort: 'desc',
    category: "women's clothing",
  } as productParametr
  const { data } = await getProducts(req)
  products.value = data
}
const filteredByTitle=ref('')
const searchResult = async (res: productDTO[]) =>{
  console.log(res);
  filteredByTitle.value=res[0]?.title
  products.value=res
}

</script>
