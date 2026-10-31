import { useRef } from "react"

export default function useOtpInput({ value = "", onChange }) {
    const inputsRef = useRef([])

    const digits = Array.from({ length: 6 }, (_, index) => {
        const character = value[index]
        return character && character !== " " ? character : ""
    })

    const updateCode = (nextDigits) => {
        onChange(nextDigits.map((digit) => digit || " ").join(""))
    }

    const handleChange = (index, event) => {
        const digit = event.target.value.replace(/[^0-9]/g, "").slice(-1)

        const nextDigits = [...digits]
        nextDigits[index] = digit

        updateCode(nextDigits)

        if (digit && index < digits.length - 1) {
            inputsRef.current[index + 1]?.focus()
        }
    }

    const handleKeyDown = (index, event) => {
        if (
            event.key === "Backspace" &&
            digits[index] === "" &&
            index > 0
        ) {
            event.preventDefault()

            const nextDigits = [...digits]
            nextDigits[index - 1] = ""

            updateCode(nextDigits)
            inputsRef.current[index - 1]?.focus()
        }
    }

    const handlePaste = (index, event) => {
        event.preventDefault()

        const pastedDigits = event.clipboardData
            .getData("text")
            .replace(/[^0-9]/g, "")

        if (!pastedDigits) return

        const allEmpty = digits.every((digit) => digit === "")
        const startIndex =
            allEmpty || pastedDigits.length >= digits.length ? 0 : index

        const availableDigits = pastedDigits.slice(
            0,
            digits.length - startIndex
        )

        const nextDigits = [...digits]

        availableDigits.split("").forEach((digit, offset) => {
            nextDigits[startIndex + offset] = digit
        })

        updateCode(nextDigits)

        const nextIndex = Math.min(
            startIndex + availableDigits.length,
            digits.length - 1
        )

        inputsRef.current[nextIndex]?.focus()
    }

    return {
        digits,
        inputsRef,
        handleChange,
        handleKeyDown,
        handlePaste,
    }
}