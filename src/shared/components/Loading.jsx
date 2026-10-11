import styled from "styled-components"

const LoadingContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #F4EBDD;

    z-index: 9999; 
`


const Spinner = styled.div`
    border: 4px solid #FFFAF3;
    border-top: 4px solid #C78C64;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
export default function Loading(){
    return(
        <LoadingContainer>
            <Spinner/>
        </LoadingContainer>
    )
}