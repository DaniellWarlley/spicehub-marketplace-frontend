import styled from "styled-components"
import Input from "../components/Input"
import { MdLockOutline, MdOutlineEmail } from "react-icons/md"
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
export default function Login(){
    const navigate = useNavigate()

    return(
        <Container>
            <TitleContainer>
                <p>Bem-vindo de volta</p>
                <h1>Entre na sua conta</h1>
                <p>Informe seus dados para continuar a experiência</p>
            </TitleContainer>
            <Input type="text" placeholder="seuemail@gmail.com" label="E-MAIL" icon={MdOutlineEmail}/>
            <Input type="password" placeholder="Digite sua senha" label="SENHA" icon={MdLockOutline}/>
            <Options>
                <CheckBoxContainer>
                    <input type="checkbox"/>
                    <p>Lembrar de mim</p>
                </CheckBoxContainer>
                <p>esqueci minha senha</p>
            </Options>
            <Button>ENTRAR NA MINHA CONTA</Button>
            <p>Ainda não tem uma conta? <span onClick={() => navigate("/register")}>Clique aqui.</span></p>
        </Container>
    )
}