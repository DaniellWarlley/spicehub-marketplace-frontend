import styled from "styled-components"

const InputContainer = styled.div`
    margin-top: 10px;

    label{
        color: #733521;
    }
    p{
        margin-top: 5px;

        color: #EF4444;
    }
`
const InputWrapper = styled.div`
    padding: 5px;

    height: 30px;
    width: 330px;

    display: flex;
    align-items: center;
    background-color: #FFFAF3;
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

export default function Input({ label, type, placeholder, icon: Icon, name, register, errors }){
    return(
        <InputContainer>
            <label htmlFor="email">{label}</label>
            <InputWrapper>
                {Icon && <Icon size={18} color="#733521"/>}
                <input type={type} placeholder={placeholder} {...register(name)}/>
            </InputWrapper>
            <p>{errors}</p>
        </InputContainer>
    )
}