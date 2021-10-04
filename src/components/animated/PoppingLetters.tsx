import anime from "animejs"
import { useEffect, useRef } from "react";

type Props = {
    animationDelay: number,
    className: string,
    children: string,
    triggerAnimation: boolean
}

export default function PoppingLetters({className, children, triggerAnimation = false, animationDelay = 0}: Props) {
    const textRef = useRef()

    useEffect(() => {
        if (triggerAnimation) {
            setTimeout(() => {
                if (!textRef.current || textRef.current.style.visibility == "visible") return
                animateHeadingSecond(textRef)
                textRef.current.style.visibility = "visible"
            }, animationDelay)
        }
    }, [textRef, triggerAnimation])

    return (
        <div ref={textRef} className={className} style={{visibility: "hidden"}}>
            {children}
        </div>
    )
}

/**
 * Source: https://tobiasahlin.com/moving-letters/#9
 */
function animateHeadingSecond(elementRef) {
    elementRef.current.innerHTML = elementRef.current.textContent.replace(/\S/g, `<span class="letter">$&</span>`);
    
    const letterList = elementRef.current.querySelectorAll(".letter")
    anime.timeline()
        .add({
            targets: letterList,
            scale: [0, 1],
            duration: 1500,
            elasticity: 400,
            delay: (el, i) => 85 * (i+1)
        });
}