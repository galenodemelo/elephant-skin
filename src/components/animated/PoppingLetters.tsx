import anime from "animejs"
import { useEffect, useRef } from "react";

type Props = {
    className: string,
    children: string
}

export default function PoppingLetters({className, children}: Props) {
    const textRef = useRef()

    useEffect(() => {
        animateHeadingSecond(textRef)
    }, [textRef])

    return (
        <div ref={textRef} className={className}>
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