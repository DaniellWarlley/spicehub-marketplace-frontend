import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { cadSchema } from "../schemas/authSchema"
import authService from "../services/authService"
import { useNavigate } from "react-router-dom"
import useEmailVerificationStore from "../store/useEmailVerificationStore"

export default function useCad(){
    const setEmail = useEmailVerificationStore((state) => state.setEmail)
    const navigate = useNavigate()

    const { register, formState, handleSubmit, setError,  } = useForm({
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
            if (err.status == 409){
                setError('email', {
                    type: 'server',
                    message: 'Este e-mail já está cadastrado.'
                })
            }
            console.log(err.body)
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