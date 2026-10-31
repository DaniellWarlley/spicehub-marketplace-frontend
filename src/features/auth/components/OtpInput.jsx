import styled from "styled-components"
import useOtpInput from "../hooks/useOtpInput"

const Slots = styled.div`
    margin-bottom: 10%;

    width: 100%;
    
    display: flex;
    justify-content: space-between;
`

const Slot = styled.div`
    position: relative;

    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #FFFAF3;
    border: 2px solid #F4EBDD;
    border-radius: 2px;

    color: #733521;
    font-size: 20px;

    &:focus-within {
        border-color: #733521;
        box-shadow: 0 0 0 3px rgba(115, 53, 33, 0.2);
    }
`

const NativeInput = styled.input`
    padding: 0;

    position: absolute;
    inset: 0;

    width: 100%;
    height: 100%;
    
    border: 0;
    opacity: 0;
    cursor: text;
`

export default function OtpInput({ value = "", onChange }) {
    const {
        digits,
        inputsRef,
        handleChange,
        handleKeyDown,
        handlePaste,
    } = useOtpInput({ value, onChange })

    return (
        <Slots>
            {digits.map((digit, index) => (
                <Slot key={index}>
                    <span aria-hidden="true">{digit}</span>

                    <NativeInput
                        type="text"
                        inputMode="numeric"
                        aria-label={`Dígito ${index + 1} de 6`}
                        value={digit}
                        onFocus={(event) => event.target.select()}
                        onChange={(event) => handleChange(index, event)}
                        onKeyDown={(event) => handleKeyDown(index, event)}
                        onPaste={(event) => handlePaste(index, event)}
                        ref={(element) => {
                            inputsRef.current[index] = element
                        }}
                    />
                </Slot>
            ))}
        </Slots>
    )
}