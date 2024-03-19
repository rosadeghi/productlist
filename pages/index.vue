<style lang="scss" scoped></style>
<template>
  <div class="grid grid-cols-4 px-20 py-10">
    <div class="col-span-1 ml-2">
      <div class="mb-2">
        <SharedSearch />
      </div>
      <div class="my-2">
        <SharedAvailabelFilter />
      </div>
      <div class="my-2">
        <SharedOrderingFilter @descCount="sortrList" @ascCount="sortrList" @descLevel="sortrList"
          @ascLevel="sortrList" />
      </div>
      <div class="my-2">
        <SharedCategories  />
      </div>
    </div>
    <div class="col-span-3 mr-2">
      <div class="card">
        <h4>فیلترهای اعمال شده</h4>
        <div>
          <div class="chips">
            <label for="">دو لنگه</label>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-3 mt-3">
        <div class="mx-2" v-for="product in products " :key="product.id">
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
  layout: "default"
})

const products=ref([] as productDTO[])


const list = ref(products.value as productDTO[]);

// Filter Functions
const sortModule = (filterItem: string, list: productDTO[]) => {
  switch (filterItem) {
    case "asc":
      return list.sort((a: any, b: any) => {
        return a.stock - b.stock
      })

    case "desc":
      return list.sort((a: any, b: any) => {
        return b.stock - a.stock
      })

    default:
      return list
  }
}
const categouryModule = (filterItem: string, list: productDTO[]) => {
  return list.filter(item => item.categories.name === filterItem)
}

// Filtered Response Data
const sortrList = (filtredItem: string) => {
  const sortList = sortModule(filtredItem, products.value);
  console.log("sortListsortListsortListsortList", sortList);

  // const catList = categouryModule(filtredItem, products);

  list.value = [...sortList]
  console.log("listlistlistlistlistlistlist", list);

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
  const { data } = await getProducts()
  products.value = data
}

</script>
