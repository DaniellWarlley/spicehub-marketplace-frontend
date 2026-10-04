import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { otpSchema } from "../schemas/authSchema"
import authService from "../services/authService"

export default function useOtpForm(email = ''){
    const { control, handleSubmit, formState } = useForm({
        defaultValues: {
            code: ''
        },
        resolver: zodResolver(otpSchema)
    })

    const onSubmit = async (data) => {
        try{
            await authService.verifyEmail(data)
        }catch(err) {
            console.log(err)
        }
    }

    return {
        control,
        handleSubmit,
        onSubmit
    }
}