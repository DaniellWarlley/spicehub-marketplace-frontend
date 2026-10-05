import useApiFetch from "../../../shared/hooks/useApiFetch"

const authService = {
    register: async (data) => {
        const res = await useApiFetch('auth/register', {
            method: 'POST',
            body: data
        })

        return res
    },
    login: async (data) => {
        const res = await useApiFetch('auth/login', {
            method: 'POST',
            body: data
        })

        return res
    },
    verifyEmail: async (data) => {
        const res = await useApiFetch('auth/verify-email', {
            method: 'POST',
            body: data
        })

        return res
    },
    resendVerification: async (data) => {
        const res = await useApiFetch('auth/resend-verification', {
            method: 'POST',
            body: data
        })

        return res
    }
}

export default authService