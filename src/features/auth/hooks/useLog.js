import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from "../schemas/authSchema"
import authService from "../services/authService"

export default function useLog(){
    const { register, formState, handleSubmit, setError } = useForm({
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
            if (err.status == 401){
                setError('email', {
                    type: 'server',
                    message: 'E-mail inválido.'
                })
                setError('password', {
                    type: 'server',
                    message: 'Senha inválida.'
                })
                console.log(err)
            }
        }
    }
    return{
        register,
        errors: formState.errors,
        isSubmitting: formState.isSubmitting,
        handleSubmit,
        onSubmit
    }
}