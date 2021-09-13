import Cities from "./Cities"
import Image from "next/image"
import SocialLinks from "./SocialLinks"

import styles from "./Header.module.sass"
import HelperLinks from "./HelperLinks"
import { useState } from "react"

export default function Header() {
    const [opened, setOpened] = useState<boolean>(false)

    const headerClassNameList: string[] = [styles.header]
    if (opened) headerClassNameList.push(styles["header--opened"])

    return (
        <header className={headerClassNameList.join(" ")}>
            <div className={[styles.bar, "grid-centered"].join(" ")}>
                <div className={styles.logo}>
                    <a href="#">
                        <Image src="/img/elephant-skin-logo.svg" layout="fill" alt="Elephant Skin pink logo, composed by a lettering and an elephant icon at the end" />
                    </a>
                </div>

                <button className={styles.button} onClick={() => setOpened(!opened)}>
                    {!opened 
                        ? <Image src="/img/icons/menu-animation.gif" layout="fill" alt="Bars animation growing and shrinking" />
                        : <Image src="/img/icons/close.svg?" layout="fill" alt="X icon" />}
                </button>
            </div>

            <div className={[styles.menu, "grid-centered"].join(" ")}>
                <div className={styles.contact}>
                    <SocialLinks />
                    <Cities />
                    <HelperLinks />
                </div>

                <nav className={styles.nav}>
                    <a href="#" className={styles.link}>
                        Hello
                    </a>
                    <a href="#" className={styles.link}>
                        Stories
                    </a>
                    <a href="#" className={styles.link}>
                        Moodboard
                    </a>
                    <a href="#" className={styles.link}>
                        Careers
                    </a>
                    <a href="#" className={styles.link}>
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    )
}