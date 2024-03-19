<style scoped lang="scss">
.content {
    min-height: 70dvh;
}
</style>
<template>
    <div class="main">
        <SharedHeader />
        <div class="content px-[150px] py-[20px]">
            <slot />
        </div>
        <div class="mob-footer">
            <SharedFooter />
        </div>
    </div>
</template>
<script setup lang="ts"></script>