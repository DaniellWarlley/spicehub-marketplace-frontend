import { create } from "zustand"

const useAuthStore = create((set) => ({
    acessToken: null,
    expiresAt: null,
    user: null,

    setSession: ({ acessToken, expiresAt, user }) => {
        set({
            acessToken,
            expiresAt,
            user
        })
    },

    clearSession: () => {
        set({
            acessToken: null,
            expiresAt: null,
            user: null,
        })
    }
}))

export default useAuthStore