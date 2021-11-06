import React, { useState } from "react"
import styles from "./Manifesto.module.sass"

import TheJourney from "./slides/TheJourney"
export default function Manifesto() {
    const [currentIndex, setCurrentState] = useState(0)

    const slideList: JSX.Element[] = [
        TheJourney({ active: false }),
    ]

    const controlItems: JSX.Element[] = []
    for (let i = 0; i < slideList.length; i++) {
        const classList: string[] = [styles.controlItem]
        if (i === currentIndex) classList.push(styles["controlItem--active"])

        controlItems.push(
            <button key={i} className={classList.join(" ")} data-index={i} onClick={() => setCurrentState(i)}>
                {i + 1}
            </button>
        )
    }

    return (
        <section className={styles.manifesto}>
            <div className={[styles.container, "grid-centered"].join(" ")}>
                <div className={styles.slideContainer}>
                    {slideList.map((slide: JSX.Element, index: number) => (
                        React.cloneElement(slide, { key: index, active: index === currentIndex })
                    ))}
                </div>

                <nav className={styles.control}>
                    {controlItems}
                </nav>

                <div className={styles.info}>
                    <div className={styles.rotatedText}>
                        Click to discover our <em>manifesto</em>.
                    </div>
                </div>
            </div>
        </section>
    )
}