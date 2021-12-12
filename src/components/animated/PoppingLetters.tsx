import anime from "animejs"
import { useEffect, useRef } from "react";

type Props = {
    animationDelay?: number,
    animationDuration?: number,
    className?: string,
    children: string,
    invert?: boolean,
    triggerAnimation: boolean
}

export default function PoppingLetters({className, children, triggerAnimation = false, animationDelay = 0, animationDuration = 1500, invert = false}: Props) {
    const textRef = useRef<HTMLDivElement>()

    useEffect(() => {
        if (triggerAnimation) {
            setTimeout(() => {
                if (!textRef.current || textRef.current.style.visibility == "visible") return
                animateHeadingSecond(textRef, animationDuration, invert)
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
function animateHeadingSecond(elementRef, animationDuration, invert) {
    elementRef.current.innerHTML = elementRef.current.textContent.replace(/\S/g, `<span class="letter">$&</span>`);
    
    const letterList = [].slice.call(elementRef.current.querySelectorAll(".letter"), 0);
    if (invert) letterList.reverse()
    anime.timeline()
        .add({
            targets: letterList,
            scale: [0, 1],
            animationDuration: animationDuration,
            elasticity: 400,
            delay: (el, i) => 85 * (i+1)
        });
}