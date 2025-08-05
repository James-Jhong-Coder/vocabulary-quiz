<script setup lang="ts"></script>

<template>
    <div class="section">
        <RouterView />
    </div>
</template>

<style scoped>
.section {
    @apply w-full h-full;
    @apply sm:w-[40rem] md:w-[48rem] mx-auto;
    @apply bg-gray-300 pt-10;
}
</style>
