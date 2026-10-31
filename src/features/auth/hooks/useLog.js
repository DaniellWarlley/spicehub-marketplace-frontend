import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from "../schemas/authSchema"
import authService from "../services/authService"
import useAuthStore from "../store/useAuthStore"

export default function useLog(){
    const { register, formState, handleSubmit, setError, getValues } = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: zodResolver(loginSchema)
    })
    
    const setSession = useAuthStore((state) => state.setSession)

    const onSubmit = async (data) => {
        try{
            const res = await authService.login(data)
            setSession(res)
            await authService.refresh()
        }catch(err){
            if (err.status == 401 || err.status == 400){
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
        onSubmit,
        getValues
    }
}