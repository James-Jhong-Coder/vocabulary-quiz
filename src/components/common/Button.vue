<template>
    <div class="box">
        <slot></slot>
    </div>
</template>

<style scoped>
@reference "@/assets/style/global.css";
.box {
    @apply flex items-center justify-center;
    @apply p-4 text-gray-200 cursor-pointer;
    border: 1px solid #f2f3f3;
    width: 200px;
}
</style>
