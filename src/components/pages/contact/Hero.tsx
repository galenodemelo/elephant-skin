import Picto, { PictoColor } from "@components/animated/Picto"
import styles from "./Hero.module.sass"

export default function Hero() {
    return (
        <section className={styles.hero}>
            <h1 className={styles.heading}>We are global</h1>

            <Picto color={PictoColor.WHITE} />
        </section>
    )
}