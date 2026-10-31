import apiFetch from "../../../shared/api/apiFetch"
import getCookie from "../utils/getCookie.js"

const authService = {
    register: async (data) => {
        const res = await apiFetch('auth/register', {
            method: 'POST',
            body: data
        })

        return res
    },
    login: async (data) => {
        const res = await apiFetch('auth/login', {
            method: 'POST',
            body: data
        })

        return res
    },
    verifyEmail: async (data) => {
        const res = await apiFetch('auth/verify-email', {
            method: 'POST',
            body: data
        })

        return res
    },
    resendVerification: async (data) => {
        const res = await apiFetch('auth/resend-verification', {
            method: 'POST',
            body: data
        })

        return res
    },
    requestResetCode: async (data) => {
        const res = await apiFetch('auth/request-password-reset', {
            method: 'POST',
            body: data
        })

        return res
    },
    resetPass: async (data) => {
        const res = await apiFetch('auth/reset-password', {
            method: 'POST',
            body: data
        })

        return res
    },
    refresh: async() => {
        await apiFetch("auth/csrf")

        const csrfToken = getCookie("XSRF-TOKEN")

        if (!csrfToken) {
            throw new Error("Não foi possível obter o token CSRF.")
        }

        const res = await apiFetch('auth/refresh', {
            method: 'POST',
            headers: {
                "X-XSRF-TOKEN": csrfToken,
            },
        })

        return res
    }
}

authService.refresh()
export default authService