import PoppingLetters from "@components/animated/PoppingLetters"
import Image from "next/image"
import Cities from "./Cities"
import styles from "./Footer.module.sass"
import HelperLinks from "./HelperLinks"
import NearestOffice from "./NearestOffice"
import SocialLinks from "./SocialLinks"

type Props = {
    isActive?: boolean
}

export default function Footer({ isActive }: Props) {
    return (
        <section className={styles.footer}>
            <div className={styles.background}>
                <Image src="/img/decorative/world-map.png" layout="fill" objectFit="contain" objectPosition="left bottom" loading="eager" />
            </div>

            <div className={[styles.content, "grid-centered"].join(" ")}>
                <div>
                    <div className={styles.header}>
                        <h2 className={styles.heading}>
                            <small className={styles.headingFirst}>Be An</small>
                            <PoppingLetters className={styles.headingSecond} triggerAnimation={isActive} animationDelay={1500}>
                                Elephant
                            </PoppingLetters>
                        </h2>
                        <p className={styles.subheading}>
                            Ready to work with us? Check it out the open positions!
                        </p>
                        <a href="#" className={[styles.careers, "btn", "btn--pink"].join(" ")}>
                            Careers
                        </a>
                    </div>
                    <div className={styles.helper}>
                        <SocialLinks triggerAnimation={isActive} />
                        <Cities />
                        <HelperLinks />
                    </div>
                </div>
                <NearestOffice triggerAnimation={isActive} />
            </div>
        </section>
    )
}