import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { otpSchema } from "../schemas/authSchema"
import authService from "../services/authService"
import { useState } from "react"
import useCountdown from "./useCountdown"
import { useNavigate } from "react-router-dom"

export default function useOtpForm(email = ''){
    const navigate = useNavigate()

    const { control, handleSubmit, formState, setError } = useForm({
        defaultValues: {
            code: ''
        },
        resolver: zodResolver(otpSchema)
    })

    const onSubmit = async (data) => {
        const payload = {
            email,
            code: data.code
        }
        try{
            await authService.verifyEmail(payload)

            navigate('/')
        }catch(err) {
            if(err.status == 400){
                setError('code', {
                    type: 'server',
                    message: 'Código inválido.'
                })
            }
            console.log(err)
        }
    }

    const [isResending, setisResending] = useState(false)
    const [resendError, setResendError] = useState('')

    const { secondsLeft, isFinished, restart } = useCountdown(60)

    const canSendCode = isFinished && !isResending && Boolean(email)

    const handleResendVerification = async () => {
        if (!canSendCode) return

        setisResending(true)
        setResendError('')

        try{
            await authService.resendVerification({ email })
            restart()
        }catch(err){
            console.log(err)
            setResendError("Não foi possível reenviar o código. Tente novamente.")
        }finally{
            setisResending(false)
        }
    }
    return {
        control,
        errors: formState.errors,
        isSubmitting: formState.isSubmitting,
        handleSubmit,
        onSubmit,
        secondsLeft,
        canSendCode,
        isResending,
        resendError,
        handleResendVerification,
    }
}