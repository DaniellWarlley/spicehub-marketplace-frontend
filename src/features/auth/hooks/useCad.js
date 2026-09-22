import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { cadSchema } from "../schemas/authSchema"
import authService from "../services/authService"

export default function useCad(){
    const { register, formState, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        },
        resolver: zodResolver(cadSchema)
    })
    
    const onSubmit = async (data) => {
        try{
            await authService.register(data)
            console.log(data)
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