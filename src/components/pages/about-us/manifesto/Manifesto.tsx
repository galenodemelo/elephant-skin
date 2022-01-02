import React, { useState } from "react"
import styles from "./Manifesto.module.sass"
import ManifestoPopUp from "./ManifestoPopUp"

import Manifesto2 from "./slides/Manifesto2"
import TheJourney from "./slides/TheJourney"

export default function Manifesto() {
    const [currentIndex, setCurrentState] = useState(0)
    const [isPopUpOpened, setIsPopUpOpened] = useState(false)

    const slideList: JSX.Element[] = [
        TheJourney({ active: false }),
        Manifesto2({ active: false })
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
                        Click to discover our <em onClick={() => setIsPopUpOpened(true)}>manifesto</em>.
                    </div>
                </div>
            </div>

            <ManifestoPopUp isOpened={isPopUpOpened} setIsOpened={setIsPopUpOpened} />
        </section>
    )
}