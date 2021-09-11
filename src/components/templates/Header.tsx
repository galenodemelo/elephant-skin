import Image from "next/image"
import SocialLinks from "./SocialLinks"

import styles from "./Header.module.sass"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.bar}>
                <div className={styles.logo}>
                    <a href="#">
                        <Image src="/img/elephant-skin-logo.svg" layout="fill" alt="Elephant Skin pink logo, composed by a lettering and an elephant icon at the end" />
                    </a>
                </div>

                <button className={styles.button}>
                    <Image src="/img/menu-animation.gif" layout="fill" alt="Bars animation growing and shrinking" />
                </button>
            </div>

            <div className={styles.menu}>
                <div className={styles.info}>
                    <SocialLinks />
                    <Cities />
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