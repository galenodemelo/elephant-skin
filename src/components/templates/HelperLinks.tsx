import Image from "next/image"
import styles from "./HelperLinks.module.sass"

type Props = {
    triggerAnimation?: boolean
}

export default function HelperLinks({triggerAnimation = true}: Props) {
    return (
        <div className={styles.helperLinks} data-active={triggerAnimation}>
            <nav className={styles.links} data-play-on-active>
                <a href="#">Disclaimer</a>
                <a href="#">Privacy</a>
                <a href="#">Legal</a>
                <a href="#">Press</a>
            </nav>

            <div className={styles.copyright} data-play-on-active>
                <div>&copy; All rights reserved to Elephan Skin LLC</div>
                <Image src="/img/elephant-skin-picto-white.svg" width="32" height="32" />
            </div>
        </div>
    )
}