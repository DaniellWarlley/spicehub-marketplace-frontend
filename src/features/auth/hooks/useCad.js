import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { cadSchema } from "../schemas/authSchema"
import authService from "../services/authService"
import { useNavigate } from "react-router-dom"
import useEmailVerificationStore from "../store/useEmailVerificationStore"

export default function useCad(){
    const setEmail = useEmailVerificationStore((state) => state.setEmail)
    const navigate = useNavigate()

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
            setEmail(data.email)
            navigate('/verificarEmail')
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