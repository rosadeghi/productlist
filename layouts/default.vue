<style scoped lang="scss">
.content {
    min-height: 70dvh;
}
</style>
<template>
    <div class="main">
        <SharedHeader />
        <div class="content">
            <slot />
        </div>
        <div class="mob-footer">
            sds
            <SharedFooter />
        </div>
    </div>
</template>
<script setup lang="ts"></script>