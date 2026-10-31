import styled from "styled-components"

const Img = styled.img`
    width: 100%;

    border-radius: 5px;
`
const ProdutoContainer = styled.div`
    padding: 5px;

    background-color: #FFFAF3;
    border-radius: 5px;

    h4, span {
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
export default function Produto(){
    return(
        <ProdutoContainer>
            <Img src="/images/canela.png" alt="" />
            <div>
                <p>Temperos</p>
                <h4>Canela em pau</h4>
                <p>A partir de <span>R$ 8,90</span></p>
            </div>
            <Button>COMPRAR</Button>
        </ProdutoContainer>
    )
}