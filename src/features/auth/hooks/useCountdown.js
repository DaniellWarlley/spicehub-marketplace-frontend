import { useEffect, useState } from "react"

export default function useCountdown(initialSeconds = 60){
    const [secondsLeft, setSecondsLeft] = useState(initialSeconds)

    useEffect(() => {
        if (secondsLeft == 0) return

        const timeOutId = setTimeout(() => {
            setSecondsLeft((current) => Math.max(0, current - 1))
        }, 1000)

        return () => clearTimeout(timeOutId)
    }, [secondsLeft])

    const restart = (seconds = initialSeconds) => {
        setSecondsLeft(seconds)
    }

    return {
        secondsLeft,
        restart,
        isFinished: secondsLeft == 0 
    }
}