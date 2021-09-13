import Image from "next/image"
import styles from "./HelperLinks.module.sass"

export default function HelperLinks() {
    return (
        <div className={styles.helperLinks}>
            <nav className={styles.links}>
                <a href="#">Disclaimer</a>
                <a href="#">Privacy</a>
                <a href="#">Legal</a>
                <a href="#">Press</a>
            </nav>

            <div className={styles.copyright}>
                <div>&copy; All rights reserved to Elephan Skin LLC</div>
                <Image src="/img/elephant-skin-picto.svg" width="32" height="32" />
            </div>
        </div>
    )
}