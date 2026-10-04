import { useRef } from "react"
import styled from "styled-components"

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

export default function OtpInput({ value = '', onChange }) {
    const inputsRef = useRef([])

    const digits = Array.from({ length: 6 }, (_, index) => {
        const character = value[index]
        return character && character !== ' ' ? character : ''
    })

    const handleChange = (index, event) => {
        const digit = event.target.value.replace(/[^0-9]/g, '').slice(-1)

        const nextDigits = [...digits]
        nextDigits[index] = digit

        const nextCode = nextDigits.map((item) => item || ' ').join('')
        onChange(nextCode)

        if (digit && index < digits.length - 1) {
            inputsRef.current[index + 1]?.focus()
        }
    }

    const handleKeyDown = (index, event) => {
        if (event.key == 'Backspace' && digits[index] == '' && index > 0) {
            event.preventDefault()

            const nextDigits = [...digits]
            nextDigits[index - 1] = ''

            const nextCode = nextDigits.map((item) => item || ' ').join('')
            onChange(nextCode)

            inputsRef.current[index - 1]?.focus()
        }
    }

    const handlePaste = (index, event) => {
        event.preventDefault()

        const pastedDigits = event.clipboardData
            .getData('text')
            .replace(/[^0-9]/g, '')

        if (!pastedDigits) return

        const allEmpty = digits.every((digit) => digit === '')

        const startIndex =
            allEmpty || pastedDigits.length >= 6 ? 0 : index

        const availableDigits = pastedDigits.slice(
            0,
            digits.length - startIndex
        )

        const nextDigits = [...digits]

        availableDigits.split('').forEach((digit, offset) => {
            nextDigits[startIndex + offset] = digit
        })

        const nextCode = nextDigits
            .map((item) => item || ' ')
            .join('')

        onChange(nextCode)

        const nextIndex = Math.min(
            startIndex + availableDigits.length,
            digits.length - 1
        )

        inputsRef.current[nextIndex]?.focus()
    }

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