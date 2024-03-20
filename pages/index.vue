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
        <SharedSearch :data="products" @searchResult="searchResult" />
      </div>
      <div class="my-3">
        <SharedSortFilter @filter="sortrList">
        </SharedSortFilter>
      </div>
      <div class="my-3">
        <SharedCategories @categoryFilter="categouryList" />
      </div>
    </div>
    <div class="col-span-3 mr-2">
      <div class="card selected-filter">
        <h3>فیلترهای اعمال شده</h3>
        <div>
          <div class="chips">
            <label>{{ filteredByTitle }} </label>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-3 mt-3">
        <div class="mx-2 my-2" v-for="product in list" :key="product.id">
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


if (process.client) {
  _getProducts()
}


const products = ref([] as productDTO[])
const list = ref(products.value as productDTO[]);

// SORTFILTE
async function sortrList(filtredItem: string) {
  const req = {
    sort: filtredItem,
  } as productParametr
  const { data } = await getProducts(req)

  list.value = [...data]
}
// END SORTFILTE



// filteredByTitle
const filteredByTitle = ref('')
const searchResult = async (res: productDTO[]) => {
  filteredByTitle.value = res[0]?.title
  products.value = res
}
// END filteredByTitle




const categouryModule = (filterItem: string, list: productDTO[]) => {
  const keys = Object.values(filterItem);
  const flatTest = keys.flatMap((node) => {
    return list.filter(i => i.category.includes(node));
  });
  return flatTest;
};

const categouryList = (filterItem: string) => {
  const catList = categouryModule(filterItem, products.value);
  if(!!catList.length){
    list.value = catList
  }
  else{
    list.value=products.value
  }
}

async function _getProducts() {
  const req = {
    sort: 'desc',
    category: "women's clothing",
  } as productParametr
  const { data } = await getProducts(req)
  products.value = data
  if (data) {
    list.value = products.value
  }
}


</script>
