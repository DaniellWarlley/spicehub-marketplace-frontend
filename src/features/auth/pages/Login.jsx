import styled, { keyframes } from "styled-components"
import Input from "../components/Input"
import { MdLockOutline, MdOutlineEmail } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import useLog from "../hooks/useLog"

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
    align-items: center;
    justify-content: center;
    flex-direction: column;

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
const Options = styled.div`
    margin-top: 10%;

    width: 100%;

    display: flex;
    justify-content: space-between;

    color: #C78C64;

    p{
        cursor: pointer;
    }
`
const CheckBoxContainer = styled.div`
    display: flex;

    gap: 5px;
`
const Button = styled.button`
    padding: 5px;
    margin-top: 5px;
    margin-bottom: 1%;

    height: 40px;
    width: 330px;

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
export default function Login(){
    const navigate = useNavigate()
    const { register, errors, handleSubmit, onSubmit } = useLog()

    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <TitleContainer>
                <p>Bem-vindo de volta</p>
                <h1>Entre na sua conta</h1>
                <p>Informe seus dados para continuar a experiência</p>
            </TitleContainer>
            <Input type="text" placeholder="seuemail@gmail.com" label="E-MAIL" icon={MdOutlineEmail} name="email" register={register} errors={errors.email?.message}/>
            <Input type="password" placeholder="Digite sua senha" label="SENHA" icon={MdLockOutline} name="password" register={register} errors={errors.password?.message}/>
            <Options>
                <CheckBoxContainer>
                    <input type="checkbox"/>
                    <p>Lembrar de mim</p>
                </CheckBoxContainer>
                <p>esqueci minha senha</p>
            </Options>
            <Button type="submit">ENTRAR NA MINHA CONTA</Button>
            <p>Ainda não tem uma conta? <span onClick={() => navigate("/register")}>Clique aqui.</span></p>
        </Form>
    )
}