import Image from "next/image"
import styles from "./Concept.module.sass"

export default function Concept() {
    return (
        <section className={styles.concept}>
            <div className="grid-centered">
                <div className={styles.quoteSymbol} data-play-on-active>
                    <Image src="/img/decorative/quote-symbol.png" layout="fill" />
                </div>
                <div className={styles.quoteSymbol} data-play-on-active>
                    <Image src="/img/decorative/quote-symbol.png" layout="fill" />
                </div>
                <div className={styles.decorative} data-play-on-active>
                    <Image src="/img/decorative/elephant-draw-concept.png" layout="fill" objectFit="contain" />
                </div>
                <div className={styles.content}>
                    <div className={styles.text} data-play-on-active>
                        <p>To have an elephant skin means to be bold, sharp, think forward, and make it happen.</p>
                        <p>Our team is built of minds, not arms.</p>
                        <p>We are thinkers and doers that transform real estate into masterpieces!”</p>
                        <p>
                            <small><span style={{ textTransform: "uppercase" }}>Henrique Driessen</span> - Founder and CEO</small>
                        </p>
                    </div>
                    <div className={styles.picto} data-play-on-active>
                        <Image src="/img/elephant-skin-picto-white.svg" layout="fill" />
                    </div>
                </div>
            </div>
        </section>
    )
}