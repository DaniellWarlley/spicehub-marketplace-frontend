import styled from "styled-components"

const Button = styled.button`
    padding: 5px;
    margin-top: 5px;
    margin-right: 5px;

    height: 35px;

    background-color: ${(props) => props.$selected ? '#733521' : 'transparent'};
    color: ${(props) => props.$selected ? '#FFFAF3' : '#733521'};
    border: ${(props) => props.$selected ? '0' : '1px solid #733521'};
    border-radius: 2px;
    cursor: pointer;

    transition: all ease 0.3s;

    &:hover {
        background-color: #602e1d;
        color: #FFFAF3;
    }
`

export default function Filter({ text, selected }){
    return(
        <>
            <Button $selected={selected}>{text}</Button>
        </>
    )
}