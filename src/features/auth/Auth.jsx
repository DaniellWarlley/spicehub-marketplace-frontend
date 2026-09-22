import styled from "styled-components"
import { Outlet } from "react-router-dom"

const Main = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
`
const LeftSide = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    background-image: url("/images/background.png");
    background-size: cover;      
    background-position: center;
    background-repeat: no-repeat;

    h1{
        color: #FBF6ED;

        font-size: 2em;
    }
    p {
        color: #F4EBDD;

        font-size: 1.1rem;
    }

    @media (max-width: 880px) {
        display: none;
    }
`
const Text = styled.div`
    margin: 10%;
`
const RightSide = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #F4EBDD;

    span {
        color: #C78C64;
        cursor: pointer;
    }

    @media (max-width: 880px) {
        width: 100%;
    }
`
const Img = styled.img`
    width: 50%;
`

export default function Auth(){
    return(
        <Main>
            <LeftSide>
                <Text>
                    <h1>Seu cantinho cheio de aromas.</h1>
                    <p>Entre para acompanhar seus pedidos e encontrar novamente os temperos que já fazem parte da sua cozinha.</p>
                </Text>
            </LeftSide>
            <RightSide>
                <Img src="/images/logo.png" alt="logo" />
                <Outlet/>
            </RightSide>
        </Main>
    )
}