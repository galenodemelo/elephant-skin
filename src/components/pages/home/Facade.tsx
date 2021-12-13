import { useEffect, useRef } from "react"
import Image from "next/image"
import styles from "./Facade.module.sass"

type Props = {
    isActive?: boolean
}

export default function Facade({ isActive }: Props) {
    const brush = useRef<HTMLDivElement>(null)
    const canvasElement = useRef<HTMLCanvasElement>(null)
    const cursorElement = useRef<HTMLDivElement>()

    useEffect(() => {
        const ctx = canvasElement.current.getContext("2d")
        const img = document.createElement("img")
        img.src = "/img/decorative/facade-3d-model.jpg"
        img.onload = () => {
            ctx.drawImage(img, 0, 0, canvasElement.current.width, canvasElement.current.height)
        }

        canvasElement.current.addEventListener("mousemove", reveal, { passive: true })
    }, [isActive])

    function reveal(event) {
        const brushPosition = getBrush(event.clientX, event.clientY)
        if (isActive) paint(brushPosition.x, brushPosition.y)
    }

    function getBrush(x, y) {
        const canvasRect = canvasElement.current.getBoundingClientRect()
        return {
            x: Math.floor(
                (x - canvasRect.left) / (canvasRect.right - canvasRect.left) * canvasElement.current.width
            ),
            y: Math.floor(
                (y - canvasRect.top) / (canvasRect.bottom - canvasRect.top) * canvasElement.current.height
            )
        }
    }

    function paint(x, y) {
        const ctx = canvasElement.current.getContext("2d")
        ctx.beginPath()
        ctx.arc(x, y, 180, 0, Math.PI * 2, true)
        ctx.globalCompositeOperation = "destination-out"
        ctx.fill()
    }

    function followCursor(event: any) {
        const cursor = cursorElement.current
        cursor.style.left = event.clientX - cursor.clientWidth / 2 + "px"
        cursor.style.top = event.clientY - cursor.clientHeight / 2 + "px"
    }

    return (
        <section className={styles.facade}>
            <div className={styles.brush} ref={brush} onMouseMove={followCursor}>
                <canvas className={styles.image} ref={canvasElement} width={1000} height={1000}></canvas>
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