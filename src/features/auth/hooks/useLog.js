import { useForm } from "react-hook-form"

export default function useLog(){
    const { register, formState, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        },
        resolver: 
    })

    return{
        register,
        errors: formState.errors,
        handleSubmit
    }
}