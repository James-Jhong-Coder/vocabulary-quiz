<script setup lang="ts">
import { QUIZ_MODE } from "@/const/common";
import { useProfileStore } from "@/stores/profile";
const profileStore = useProfileStore();

const onSelectQuizMode = ({ mode }: { mode: number }) => {
    profileStore.updateState({
        currentMode: mode,
    });
};
</script>
<template>
    <div class="section">
        <div class="section-title">字卡 App</div>
        <div class="section-hint mt-4">請選擇要練習的語言</div>
        <div class="section-language mt-10">
            <Button @click="onSelectQuizMode({ mode: QUIZ_MODE.ENGLISH })"
                >英文</Button
            >
            <Button
                class="mt-8"
                @click="onSelectQuizMode({ mode: QUIZ_MODE.JAPANESE })"
                >日文</Button
            >
        </div>
    </div>
</template>

<style scoped>
@reference "@/assets/style/global.css";
.section {
    @apply w-full h-full;
    @apply sm:w-[40rem] md:w-[48rem] mx-auto;
    @apply bg-gray-300 pt-10;
}
.section-title {
    @apply text-gray-200 text-2xl text-center;
}
.section-hint {
    @apply text-gray-200 text-2xl text-center;
}
.section-language {
    @apply flex flex-col items-center;
}
.section-language-option {
    @apply flex items-center justify-center;
    @apply p-4 text-gray-200 cursor-pointer;
    border: 1px solid #f2f3f3;
    width: 200px;
}
</style>
