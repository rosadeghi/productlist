<style scoped lang="scss">
label{
font-size: 13px;
font-weight: 500;
color: #0A2A51;
}
</style>
<template>
    <div class="grid grid-cols-5  px-[250px] py-[20px]">
        <div class="col-span-4">
            <div class="grid grid-cols-6">
                <div class="col-span-2 logo"></div>
                <div class="col-span-1"><label>لیست محصولات</label></div>
                <div class="col-span-1"><label>دریافت مشاوره</label></div>
                <div class="col-span-1"><label>سوالات متداول</label></div>
                <div class="col-span-1"><label>تماس با ما</label></div>
            </div>
        </div>
        <div class="col-span-1">
            <button class="button">تماس</button>
        </div>
    </div>
</template>
<script setup lang="ts"></script>