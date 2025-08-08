<template>
    <div class="section">
        <RouterView />
    </div>
</template>

<style scoped>
@reference "@/assets/style/global.css";

.section {
    @apply flex flex-col;
}

.section-title {
    @apply text-gray-200 text-2xl text-center;
}

.menu {
    @apply flex flex-col items-center;
}
</style>
