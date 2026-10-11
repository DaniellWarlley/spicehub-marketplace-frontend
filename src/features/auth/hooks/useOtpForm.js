import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { otpSchema } from "../schemas/authSchema"
import authService from "../services/authService"

export default function useOtpForm(email = ''){
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

    return {
        control,
        errors: formState.errors,
        isSubmitting: formState.isSubmitting,
        handleSubmit,
        onSubmit
    }
}