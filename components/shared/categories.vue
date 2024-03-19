<style scoped lang="scss"></style>
<template>
     <div class="card">
        <h2>دسته بندی</h2>
    <label v-for="category in categories" :key="category">
      <input
        type="checkbox"
        :value="category"
        v-model="selectedCategories"
      />
      {{ category }}
    </label>
    </div>

</template>
<script setup lang="ts">
const selectedCategories = ref([]);
if (process.client) {
  _getCategories()
}
const categories =ref([] as string[])

async function _getCategories() {
  const { data } = await getCategories()
  categories.value = data
}
</script>