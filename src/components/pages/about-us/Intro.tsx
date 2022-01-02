import Picto, { PictoColor } from "@components/animated/Picto"
import anime from "animejs"
import Image from 'next/image'
import { MutableRefObject, useEffect, useRef } from "react"
import styles from "./Intro.module.sass"

type Props = {
    isActive?: boolean
}

export default function Intro({ isActive = false }: Props) {
    const headingRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        if (isActive) {
            if (!headingRef.current || headingRef.current.style.visibility == "visible") return
            console.log("animating")
            animateHello(headingRef)
            headingRef.current.style.visibility = "visible"
        }
    }, [headingRef, isActive])


    return (
        <section className={styles.intro}>
            <h1 className={styles.heading} ref={headingRef}>
                Hello,
            </h1>

            <Picto color={PictoColor.PINK} />
        </section>
    )
}

function animateHello(elementRef: MutableRefObject<any>) {
    elementRef.current.innerHTML = elementRef.current.textContent.replace(/\S/g, `<span class="letter">$&</span>`);

    const letterList = [].slice.call(elementRef.current.querySelectorAll(".letter"), 0);
    anime.timeline()
        .add({
            targets: letterList,
            translateY: [200,0],
            scale: [0, 1],
            translateZ: 0,
            opacity: [0,1],
            elasticity: 100,
            duration: 3000,
            delay: (el, i) => (150) * i
        })
}