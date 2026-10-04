import styled, { keyframes } from "styled-components"
import { useNavigate } from "react-router-dom"
import OtpInput from "../components/OtpInput"
import { Controller } from "react-hook-form"
import useOtpForm from "../hooks/useOtpForm"
import useEmailVerificationStore from "../store/useEmailVerificationStore"
import { useEffect, useState } from "react"
import authService from "../services/authService"

const aparecer = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`
const Form = styled.form`
    height: 70%;
    width: 50%;

    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 880px) {
        height: 75%;
        width: 70%;
    }

    animation: ${aparecer} 0.3s ease;
`
const TitleContainer = styled.div`
    margin-bottom: 10%;
    
    font-size: 0.9em;
    
    h1 {
        color: #733521;
    }
    p {
        color: #AA6B47;
    }
`

const ButtonContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`
const Button = styled.button`
    padding: 5px;
    margin-top: 5px;
    margin-bottom: 1%;

    height: 40px;
    width: 100%;

    background-color: #733521;
    color: #FFFAF3;
    border-radius: 2px;
    border: 0;
    cursor: pointer;

    transition: all ease 0.3s;
    
    &:hover {
        background-color: #602e1d;
    }
`
export default function EmailVerify(){
    const navigate = useNavigate()
    const email = useEmailVerificationStore((state) => state.email)
    const { control, handleSubmit, onSubmit } = useOtpForm(email)
    const [ secondsLeft, setSecondsLeft ] = useState(60)
    const [ canSendCode, setCanSendCode ] = useState(false)

    useEffect(() => {
        if(secondsLeft == 0){
            setCanSendCode(true)

            return
        }

        const timeOutId = setTimeout(() => {
            setSecondsLeft((current) => Math.max(0, current - 1))
        }, 1000)

        return () => clearTimeout(timeOutId)
    }, [secondsLeft])
    
    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <TitleContainer>
                <p>Quase lá</p>
                <h1>Confirme seu e-mail</h1>
                <p>Enviamos um código de 6 digitos para</p>
                <p>{email}</p>
            </TitleContainer>
            
            <Controller
                name='code'
                control={control}
                render={({ field }) => (
                    <OtpInput value={field.value} onChange={field.onChange}/>
                )}
            />

            {
                canSendCode ? (
                    <p>Náo recebeu o código? <span onClick={() => authService.resendVerification(email)}>Reenviar código.</span></p>
                ) : (
                    <p>Aguarde <span>{secondsLeft}</span> para reenviar o código</p>
                )
            }
            <ButtonContainer>
                <Button type="submit" >VERIFICAR CÓDIGO</Button>
                <span onClick={() => navigate('../')}>Voltar para login</span>
            </ButtonContainer>
        </Form>
    )
}