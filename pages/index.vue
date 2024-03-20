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
        <SharedSearch :data="list" @searchResult="searchResult" />
      </div>
      <div class="my-3">
        <SharedSortFilter @filter="sortList">
        </SharedSortFilter>
      </div>
      <div class="my-3">
        <SharedCategories @categoryFilter="categouryList" />
      </div>
    </div>
    <div class="col-span-3 mr-2">
      <div class="card selected-filter">
        <h3>فیلترهای اعمال شده</h3>
        <div class="flex">
          <div class="chips mx-2">
            <label>{{ filteredByTitle }} </label>
          </div>
          <div class="chips mx-2">
            {{ sortFilterItem }}
          </div>
          <div class="chips mx-2">
            {{ categoryFilterItem }}
          </div>
        </div>
      </div>
      <div class="grid grid-cols-3 mt-3">
        <div class="mx-2 my-2" v-for="product in list" :key="product.id">
          <ProductItem :data="product" v-if="!isLoading" />
        </div>
        <div v-if="isLoading" class="flex items-center justify-center w-full h-full">
          <div class="flex justify-center items-center space-x-1 text-sm text-gray-700">
            <svg fill='none' class="w-6 h-6 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
              <path clip-rule='evenodd'
                d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
                fill='currentColor' fill-rule='evenodd' />
            </svg>
            <div>Loading ...</div>
          </div>
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

const isLoading = ref(true)
if (process.client) {
  _getProducts()
}


const products = ref([] as productDTO[])
const list = ref(products.value as productDTO[]);

// SORTFILTE

const sortList = (filterItem: string, list: productDTO[]) => {
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
const sortFilterItem = ref('')
async function sortFilter(filtredItem: string) {
  sortFilterItem.value = filtredItem
  const req = {
    sort: filtredItem,
  } as productParametr
  const { data } = await getProducts(req)
  return sortList(filtredItem, data)
  list.value = [...data]
}
// END SORTFILTE



// filterByTitle
const filteredByTitle = ref('')
const searchResult = async (res: productDTO[]) => {
  debugger
  filteredByTitle.value = res[0]?.title
  products.value = res
}
// END filterByTitle




const categouryModule = (filterItem: string, list: productDTO[]) => {
  const keys = Object.values(filterItem);
  const flatTest = keys.flatMap((node) => {
    return list.filter(i => i.category.includes(node));
  });
  return flatTest;
};
const categoryFilterItem = ref('')
const categouryList = (filterItem: string) => {
  categoryFilterItem.value = filterItem
  const catList = categouryModule(filterItem, products.value);
  if (!!catList.length) {
    list.value = catList
  }
  else {
    list.value = products.value
  }
}

async function _getProducts() {
  const req = {
    sort: 'desc',
    category: "women's clothing",
  } as productParametr
  const { data } = await getProducts(req)
  products.value = data
  isLoading.value = false
  if (data) {
    list.value = products.value
  }
}


</script>
