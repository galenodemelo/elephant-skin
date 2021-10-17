import Image from "next/image"
import styles from "./Concept.module.sass"

export default function Concept() {
    return (
        <section className={styles.concept}>
            <div className="grid-centered">
                <div className={styles.quoteSymbol}>
                    <Image src="/img/decorative/quote-symbol.png" layout="fill" />
                </div>
                <div className={styles.decorative}>
                    <Image src="/img/decorative/elephant-draw-concept.png" layout="fill" objectFit="contain" />
                </div>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <p>To have an elephant skin means to be bold, sharp, think forward, and make it happen.</p>
                        <p>Our team is built of minds, not arms.</p>
                        <p>We are thinkers and doers that transform real estate into masterpieces!”</p>
                    </div>
                    <div className={styles.picto}>
                        <Image src="/img/elephant-skin-picto.svg" layout="fill" />
                    </div>
                </div>
            </div>
        </section>
    )
}