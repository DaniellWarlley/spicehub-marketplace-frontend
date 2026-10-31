import styled from "styled-components"
import SearchBar from "../../shared/components/SearchBar"
import { MdOutlineLocalGroceryStore, MdOutlinePerson2 } from "react-icons/md"
import Produto from "./components/Produto"
import Filter from "./components/Filter"

const Main = styled.main`
    height: 100vh;

    background-color: #F4EBDD;
`
const Header = styled.header`
    width: 100%;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: #FFFAF3;
    gap: 32px;
`

const Img = styled.img`
    height: 50px;
    object-fit: contain;
`

const HeaderActions = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`

const CartButton = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 35px;
    height: 35px;
    padding: 0;
    border: 0;
    background: none;
    cursor: pointer;

    svg {
        width: 30px;
        height: 30px;
        color: #733521;
    }

    span {
        position: absolute;
        top: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #733521;
        color: #fffaf3;
        font-size: 11px;
    }
`

const AccountButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;

    padding: 0;
    border: 0;
    background: none;
    color: #733521;
    cursor: pointer;

    svg {
        width: 30px;
        height: 30px;
    }

    span {
        font-size: 16px;
    }
`
const Container = styled.div`
    padding: 2%;
    box-sizing: border-box;
    width: 100%;
`
const Text = styled.div`
    h1 {
        color: #733521;
    }
    p {
        color: #AA6B47;
    }
`
const FilterContainer = styled.div` 
`
const ProdutoContainer = styled.div`
    margin-top: 10px;

    display: grid;
    grid-template-columns: repeat(6, 1fr);

    gap: 10px;
`
export default function Catalog() {
    return (
        <Main>
            <Header>
                <Img src="/images/logo.png" alt="logo" />
                <SearchBar />
                <HeaderActions>
                    <CartButton type="button" aria-label="Abrir carrinho">
                        <MdOutlineLocalGroceryStore />
                        <span>0</span>
                    </CartButton>

                    <AccountButton type="button">
                        <MdOutlinePerson2 />
                        <span>Daniell</span>
                    </AccountButton>
                </HeaderActions>
            </Header>
            <Container>
                <Text>
                    <h1>Nossos produtos</h1>
                    <p>Encontre os sabores que combinam com você.</p>
                    <FilterContainer>
                        <Filter text="Todos" selected={true}/>
                        <Filter text="Temperos"/>
                        <Filter text="Chás"/>
                        <Filter text="Ervas"/>
                        <Filter text="Produtos agricolar"/>
                    </FilterContainer>
                </Text>
                <ProdutoContainer>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                </ProdutoContainer>      
                
            </Container>   
        </Main>
    )
}