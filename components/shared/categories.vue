<style scoped lang="scss"></style>
<template>
     <div class="card">
        <h2>دسته بندی</h2>
        <div  class="my-2" v-for="category in categories" :key="category">
          <label>
      <input
        type="checkbox"
        :value="category"
        v-model="selectedCategories"
      />
      {{ category }}
    </label>
        </div>
   
    </div>

</template>
<script setup lang="ts">
const selectedCategories = ref([]);
if (process.client) {
  _getCategories()
}
const categories =ref([] as string[])
const emit = defineEmits(['categoryFilter'])

async function _getCategories() {
  const { data } = await getCategories()
  categories.value = data
}

watch(() => selectedCategories.value, (newValue) => {
    emit('categoryFilter', newValue)
});
</script>