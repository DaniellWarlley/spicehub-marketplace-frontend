import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { passwordRecoverySchema } from "../schemas/authSchema"
import authService from "../services/authService"
import useEmailVerificationStore from "../store/useEmailVerificationStore"

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

    const onSubmit = async (data) => {
        try{
            await authService.resetPass(data)

            console.log(data)
        }catch(err){
            console.log(err)
        }
    }

    return {
        control,
        register,
        errors: formState.errors,
        trigger,
        getValues,
        handleSubmit,
        onSubmit
    }
}