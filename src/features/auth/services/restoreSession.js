import authService from "./authService"
import useAuthStore from "../store/useAuthStore"
import { useNavigate } from "react-router-dom"

let pendingRequest = null

export default function restoreSession() {
    const navigate = useNavigate()
    if (pendingRequest) {
        return pendingRequest
    }

    pendingRequest = authService.refresh()
        .then((session) => {
            useAuthStore.getState().setSession(session)

            navigate('/catalogo')
            return true
        })
        .catch((error) => {
            if (error.status === 401) {
                useAuthStore.getState().clearSession()

                return false
            }

            throw error
        })
        .finally(() => {
            pendingRequest = null
        })

    return pendingRequest
}