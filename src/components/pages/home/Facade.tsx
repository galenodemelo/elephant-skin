import { useEffect, useRef } from "react"
import Image from "next/image"
import styles from "./Facade.module.sass"

export default function Facade() {
    const brush = useRef<HTMLDivElement>(null)

    useEffect(() => {
        brush.current.addEventListener("mousemove", (event) => {
            const bubbles = document.createElement("span")
            bubbles.style.left = (event.clientX - 140) + "px"
            bubbles.style.top = (event.clientY - 140) + "px"
            brush.current.appendChild(bubbles)
        }, { passive: true })
    }, [])
    return (
        <section className={styles.facade}>
            <div className={styles.brush} ref={brush}>
            </div>
            <h2 className={styles.heading}>
                <small>We <br />make it</small>
                <span>real.</span>
            </h2>
        </section>
    )
}