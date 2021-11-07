import Image from "next/image"
import styles from "./Hero.module.sass"

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.header}>
                    <small>Stories that</small>
                    <b>impact</b>
                </h1>

                <div className={styles.picto}>
                    <Image src="/img/elephant-skin-picto-pink.svg" layout="fill" alt="X icon" />
                </div>
            </div>
        </section>
    )
}