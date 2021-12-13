import { useEffect, useRef } from "react"
import Image from "next/image"
import styles from "./Facade.module.sass"

export default function Facade() {
    const brush = useRef<HTMLDivElement>(null)
    const cursorElement = useRef<HTMLDivElement>()

    useEffect(() => {
        brush.current.addEventListener("mousemove", (event) => {
            followCursor(event)

            const bubbles = document.createElement("span")
            bubbles.style.left = (event.clientX - 140) + "px"
            bubbles.style.top = (event.clientY - 140) + "px"
            brush.current.appendChild(bubbles)
        }, { passive: true })
    }, [])

    function followCursor(event: any) {
        const cursor = cursorElement.current
        cursor.style.left = event.clientX - cursor.clientWidth / 2 + "px"
        cursor.style.top = event.clientY - cursor.clientHeight / 2 + "px"
    }

    return (
        <section className={styles.facade}>
            <div className={styles.brush} ref={brush}>
                <div className={styles.cursor} ref={cursorElement}>
                    <Image src="/img/cursor/make-it-real.gif" layout="fill" />
                </div>
            </div>
            <h2 className={styles.heading}>
                <small>We <br />make it</small>
                <span>real.</span>
            </h2>
        </section>
    )
}