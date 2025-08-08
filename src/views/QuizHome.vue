<script setup>
import { useProfileStore } from "@/stores/profile";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { QUIZ_MODE } from "@/const/common";
const profileStore = useProfileStore();
const router = useRouter();
const route = useRoute();
const lang = route.params.lang;
const computedTitle = computed(() => {
    return {
        [QUIZ_MODE.ENGLISH]: "目前測試模式 : 英文",
        [QUIZ_MODE.JAPANESE]: "目前測試模式 : 日文",
    };
});

const onGoToCollection = () => {
    router.push({
        name: "collections",
        params: {
            lang,
        },
    });
};
const onGoToStartQuiz = () => {
    router.push({
        name: "quizStart",
        params: {
            lang,
        },
    });
};
</script>

<template>
    <div class="section">
        <span class="section-title">{{
            computedTitle[profileStore.currentMode]
            }}</span>
        <div class="menu mt-10">
            <Button @click="onGoToCollection">字卡集</Button>
            <Button class="mt-8" @click="onGoToStartQuiz">開始測驗</Button>
        </div>
    </div>
</template>

<style scoped>
@reference "@/assets/style/global.css";

.section {
    @apply flex flex-col pt-10;
}

.section-title {
    @apply text-gray-200 text-2xl text-center;
}

.menu {
    @apply flex flex-col items-center;
}
</style>
