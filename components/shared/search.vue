<style lang="scss" scoped></style>
<template>
    <div class="card">
        <h4>فیلتر و جستجو</h4>
        <input class="input mb-4" v-model="keyWord" type="text">
        <button class="button" @click="search">جستجو</button>
    </div>
</template>
<script lang="ts" setup>
import type { productDTO } from '~/types/productDTO';
const emit = defineEmits(['searchResult'])
const props = defineProps<{ data: productDTO[] }>()
console.log(props.data);

const product = props.data
const keyWord = ref('')

const search = () => {
console.log(product.filter(i => i.title.includes(keyWord.value)));
    
 emit('searchResult', product.filter(i => i.title.includes(keyWord.value)))
}
</script>
