import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { cadSchema } from "../schemas/authSchema"
import authService from "../services/authService"
import { useLocation, useNavigate } from "react-router-dom"

export default function useCad(){
    const { state } = useLocation()
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
            navigate('/verificarEmail', {
                state: {
                    email: data.email
                }
            })
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