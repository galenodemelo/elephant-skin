import Picto, { PictoColor } from "@components/animated/Picto"
import styles from "./Hero.module.sass"

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.header}>
                    <small>Stories that</small>
                    <b>impact</b>
                </h1>

                <Picto color={PictoColor.PINK} />
            </div>
        </section>
    )
}