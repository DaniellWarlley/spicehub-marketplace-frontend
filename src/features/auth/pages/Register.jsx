import styled, { keyframes } from "styled-components"
import Input from "../components/Input"
import { MdLockOutline, MdOutlineEmail, MdOutlinePerson2 } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import useCad from "../hooks/useCad"

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
export default function Register(){
    const navigate = useNavigate()
    const { register, onSubmit, handleSubmit, errors } = useCad()
    
    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <TitleContainer>
                <p>Bem-vindo</p>
                <h1>Crie sua conta</h1>
                <p>Informe seus dados para continuar a experiência</p>
            </TitleContainer>
            <Input type="text" placeholder="Digite seu nome" label="NOME" icon={MdOutlinePerson2} register={register} name='name' errors={errors.name?.message}/>
            <Input type="text" placeholder="seuemail@gmail.com" label="E-MAIL" icon={MdOutlineEmail} register={register} name='email' errors={errors.email?.message}/>
            <Input type="password" placeholder="Digite sua senha" label="SENHA" icon={MdLockOutline} register={register} name='password' errors={errors.password?.message}/>
            <Button type="submit" >ENTRAR NA MINHA CONTA</Button>
            <p>Já tem uma conta? <span onClick={() => navigate("../")}>Clique aqui.</span></p>
        </Form>
    )
}