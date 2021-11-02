import Image from "next/image"
import styles from "./WeAreElephants.module.sass"

export default function WeAreElephants() {
    return (
        <section className={styles.weAreElephants}>
            <div className={[styles.container, "grid-centered"].join(" ")}>
                <ul className={styles.serviceList}>
                    <li className={styles.serviceItem}>
                        Brand <br />storytelling
                    </li>
                    <li className={styles.serviceItem}>
                        CGI
                    </li>
                    <li className={styles.serviceItem}>
                        Films
                    </li>
                    <li className={styles.serviceItem}>
                        Still <br />renderings
                    </li>
                    <li className={styles.serviceItem}>
                        Virtual reality
                    </li>
                    <li className={styles.serviceItem}>
                        Animation
                    </li>
                </ul>
                <div className={styles.elephant}>
                    <div className={styles.background}>
                        <Image src="/img/decorative/pink-brush-background.png" layout="fill" objectFit="contain" />
                    </div>
                    <div className={styles.animation}>
                        <Image src="/img/decorative/elephant-draw-scientist-dropper.gif" layout="fill" objectFit="contain" />
                    </div>
                </div>
            </div>
        </section>
    )
}