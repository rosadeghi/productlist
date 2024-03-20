<style scoped lang="scss">
.content {
    min-height: 70dvh;
}
</style>
<template>
    <div class="main">
        <SharedHeader />
        <div class="content layout-padding-x py-[20px]">
            <slot />
        </div>
        <div>
            <SharedFooter />
        </div>
    </div>
</template>
<script setup lang="ts"></script>