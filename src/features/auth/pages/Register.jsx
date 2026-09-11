import styled from "styled-components"
import Input from "../components/Input"
import { MdLockOutline, MdOutlineEmail, MdOutlinePerson2 } from "react-icons/md"
import { useNavigate } from "react-router-dom"

const Container = styled.div`
    height: 70%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const TitleContainer = styled.div`
    margin-bottom: 10%;

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

    height: 45px;
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
export default function Register(){
    const navigate = useNavigate()

    return(
        <Container>
            <TitleContainer>
                <p>Bem-vindo</p>
                <h1>Crie sua conta</h1>
                <p>Informe seus dados para continuar a experiência</p>
            </TitleContainer>
            <Input type="text" placeholder="Digite seu nome" label="NOME" icon={MdOutlinePerson2}/>
            <Input type="text" placeholder="seuemail@gmail.com" label="E-MAIL" icon={MdOutlineEmail}/>
            <Input type="password" placeholder="Digite sua senha" label="SENHA" icon={MdLockOutline}/>
            <Button>ENTRAR NA MINHA CONTA</Button>
            <p>Já tem uma conta? <span onClick={() => navigate("../")}>Clique aqui.</span></p>
        </Container>
    )
}