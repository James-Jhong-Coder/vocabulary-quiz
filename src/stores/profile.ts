import { defineStore } from "pinia";

interface ProfileState {
    currentMode: number | null;
}

export const useProfileStore = defineStore("profile", {
    state: (): ProfileState => ({
        currentMode: null,
    }),
    actions: {
        updateState(payload: Partial<ProfileState>) {
            this.$patch(payload);
        },
    },
});
