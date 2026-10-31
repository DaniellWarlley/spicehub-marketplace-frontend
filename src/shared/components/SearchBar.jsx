import { FaMagnifyingGlass } from "react-icons/fa6"
import styled from "styled-components"

const SearchBarContainer = styled.div`
    padding: 5px;

    height: 25px;
    width: 300px;

    display: flex;
    align-items: center;
    
    border: 2px solid #F4EBDD;
    border-radius: 2px;
    gap: 5px;

    input{
        width: 100%; 

        background-color: transparent;
        outline: 0;
        border: 0;
    }

    &:focus-within {
        border-color: #733521;
        box-shadow: 0 0 0 3px rgba(115, 53, 33, 0.2);
    }
`

export default function SearchBar(){
    return(
        <SearchBarContainer>
            <FaMagnifyingGlass color="#733521"/>
            <input placeholder="O que você procura?"/>
        </SearchBarContainer>
    )
}