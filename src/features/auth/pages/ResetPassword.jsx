import styled, { keyframes } from "styled-components"
import { MdLockOutline, MdOutlineEmail } from "react-icons/md"
import Input from "../components/Input"
import OtpInput from "../components/OtpInput"
import usePassReset from "../hooks/usePassReset"
import { Controller } from "react-hook-form"
import { useNavigate } from "react-router-dom"

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
    position: relative;

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
    margin-bottom: 5%;
    
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
export default function ResetPassword(){
    const { register, errors, control, handleStepSubmit, step } = usePassReset()
    const navigate = useNavigate()

    return (
        <Form onSubmit={handleStepSubmit}>
            <TitleContainer>
                <p>Preencha sua informações</p>
                <h1>Recupere sua senha</h1>
                <p>Informe seus dados para continuar a experiência</p>
            </TitleContainer>
            {step == 'email' && (
                <>
                    <Input type="text" placeholder="seuemail@gmail.com" label="E-MAIL" icon={MdOutlineEmail} name="email" register={register} errors={errors.email?.message}/>
                    <ButtonContainer>
                        <Button type="submit">ENVIAR CÓDIGO</Button>
                        <span onClick={() => navigate('../')}>Voltar para login</span>
                    </ButtonContainer>
                </>
            )}
            {step == 'code' && (
                <>
                    <Controller
                        name='code'
                        control={control}
                        render={({ field }) => (
                            <OtpInput value={field.value} onChange={field.onChange}/>
                        )}
                    />
                    <p style={{ color: '#EF4444' }}>{errors.code?.message}</p>
                    <ButtonContainer>
                        <Button type="submit">CONTINUAR</Button>
                        <span onClick={() => navigate('../')}>Voltar para login</span>
                    </ButtonContainer>
                </>
            )} 
            {step == 'pass' && (
                <>
                    <Input type="password" placeholder="Digite sua senha" label="SENHA" icon={MdLockOutline} name="newPassword" register={register} errors={errors.newPassword?.message}/>
                    <Input type="password" placeholder="Confirme sua senha" label="CONFIRMAR SENHA" icon={MdLockOutline} name="confirmPassword" register={register} errors={errors.confirmPassword?.message}/>
                    
                    <ButtonContainer>
                        <Button type="submit">REDEFINIR SENHA</Button>
                        <span onClick={() => navigate('../')}>Voltar para login</span>
                    </ButtonContainer>
                </>
            )}
            
        </Form>
    )
}