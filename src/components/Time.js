import React from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"

export function Time() {
    const [date, setDate] = useState(new Date())
    const buttonRef = useRef()
    const tick = () => {
        setDate(new Date())
    }
    useEffect(() => {
        buttonRef.current = setInterval(tick, 1000)
        return () => {
            clearInterval(buttonRef.current)
        }
    }, [])

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <button onClick={() => clearInterval(buttonRef.current)} type="button">Cleanup</button>
        </div>
    )
}