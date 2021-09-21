import Image from "next/image"
import Cities from "./Cities"
import styles from "./Footer.module.sass"
import HelperLinks from "./HelperLinks"
import SocialLinks from "./SocialLinks"

export default function Footer() {
    return (
        <section className={styles.footer}>
            <div className={styles.background}>
                <Image src="/img/decorative/world-map.png" layout="fill" objectFit="contain" objectPosition="left bottom" />
            </div>

            <div className={[styles.content, "grid-centered"].join(" ")}>
                <div>
                    <div className={styles.header}>
                        <h2 className={styles.heading}>
                            <small>Be An</small>
                            <span>Elephant</span>
                        </h2>
                        <p className={styles.subheading}>
                            Ready to work with us? Check it out the open positions!
                        </p>
                        <a href="#" className="btn btn--pink">
                            Careers
                        </a>
                    </div>
                    <div className={styles.helper}>
                        <SocialLinks />
                        <Cities />
                        <HelperLinks />
                    </div>
                </div>
            </div>
        </section>
    )
}