import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { passwordRecoverySchema } from "../schemas/authSchema"
import authService from "../services/authService"
import useEmailVerificationStore from "../store/useEmailVerificationStore"
import { useState } from "react"

export default function usePassReset(){
    const { register, formState, control, getValues, trigger, handleSubmit } = useForm({
        resolver: zodResolver(passwordRecoverySchema),
        defaultValues: {
            email: useEmailVerificationStore((state) => state.email),
            code: '',
            newPassword: '',
            confirmPassword: '',
        },
        shouldUnregister: false,
    })

    const [step, setStep] = useState("email")

    const onSubmit = async (data) => {
        try{
            await authService.resetPass({
                email: data.email,
                code: data.code,
                newPassword: data.newPassword
            })
        }catch(err){
            console.log(err)
        }
    }

    const handleStepSubmit = async (event) => {
        event.preventDefault()

        try {
            if (step === 'email') {
                const valid = await trigger('email')

                if (!valid) return

                await authService.requestResetCode({
                    email: getValues('email').trim(),
                })

                setStep('code')
                return
            }

            if (step === 'code') {
                const valid = await trigger('code')

                if (!valid) return

                setStep('pass')
                return
            }

            if (step === 'pass') {
                await handleSubmit(onSubmit)(event)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return {
        control,
        register,
        errors: formState.errors,
        handleStepSubmit,
        onSubmit,
        step
    }
}