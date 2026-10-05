import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from "../schemas/authSchema"
import authService from "../services/authService"

export default function useLog(){
    const { register, formState, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: zodResolver(loginSchema)
    })
    
    const onSubmit = async (data) => {
        try{
            await authService.login(data)
        }catch(err){
            console.log(err)
        }
    }
    return{
        register,
        errors: formState.errors,
        handleSubmit,
        onSubmit
    }
}