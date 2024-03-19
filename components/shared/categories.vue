<style lang="scss" scoped></style>
<template>
    <div class="card">
        <h2>دسته بندی</h2>
        <div>
    <label v-for="category in allCategories" :key="category">
      <input
        type="checkbox"
        :value="category"
        v-model="selectedCategories"
      />
      {{ category }}
    </label>
  </div>

        <!-- <ul>
            <li class="flex">
                <div class="flex items-center ps-3">
                    <input id="vue-checkbox" type="checkbox" value="building" v-model="building"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="vue-checkbox"
                        class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> مسکن و ساختمان</label>
                </div>
                <span>13</span>
            </li>
            <li class="flex">
                <div class="flex items-center ps-3">
                    <input id="react-checkbox" type="checkbox" :value="category" v-model="treatment"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="react-checkbox" :key="category"
                        class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> 
                        {{ category }}
                        </label>
                </div>
                <span>13</span>
            </li>
            <li class="flex">
                <div class="flex items-center ps-3">
                    <input id="angular-checkbox" type="checkbox" value="industrial" v-model="industrial"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="angular-checkbox"
                        class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> صنعتی و کارخانه</label>
                </div>
                <span>13</span>
            </li>
        </ul> -->

    </div>
</template>
<script lang="ts" setup>
const category='بهداشت و درمان'
const building =ref('') 
const treatment =ref('')
const industrial =ref('')

const emit = defineEmits(['building','treatment','industrial'])
watch(building,(newVal : string)=>{
    console.log(newVal);
    emit('building', newVal)
})

watch(treatment,(newVal : string)=>{
    console.log(newVal);
    emit('treatment', newVal)
})

watch(industrial,(newVal : string)=>{
    console.log(newVal);
    emit('industrial', newVal)
})


const allCategories = ['1', '2', '3', '4', '5']; 
const items = ref();
const selectedCategories = ref([]);

const filteredItems = computed(() => {
  if (selectedCategories.value.length === 0) {
    console.log(items.value);
    
    return items.value
  }
  return items.value.filter((item:any) =>
    item.categories.some((cat:any) => selectedCategories.value.includes(cat))
  );
});
console.log(filteredItems);


</script>
