import { createStore } from "vuex";

export interface rootState {
    securitySelectedId: string | undefined;
    safeTreeSelectedId: string | undefined;
}

export default createStore<rootState>({
    state: { securitySelectedId: undefined, safeTreeSelectedId: undefined },
    getters: {
        getSecuritySelectedId(state) {
            return state.securitySelectedId;
        },
        getSafeTreeSelectedId(state) {
            return state.safeTreeSelectedId;
        },
    },
    mutations: {
        changeSecuritySelectedId(state, payload) {
            state.securitySelectedId = payload;
        },
        changeSafeTreeSelectedId(state, payload) {
            state.safeTreeSelectedId = payload;
        },
    },
    actions: {},
    modules: {},
});
