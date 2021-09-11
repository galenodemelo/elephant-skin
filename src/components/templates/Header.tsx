import Image from "next/image"
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
                <nav className={styles.nav}>
                    <div>
                        <a href="#" className={styles.link}>
                            Hello
                        </a>
                    </div>
                    <div>
                        <a href="#" className={styles.link}>
                            Stories
                        </a>
                    </div>
                    <div>
                        <a href="#" className={styles.link}>
                            Moodboard
                        </a>
                    </div>
                    <div>
                        <a href="#" className={styles.link}>
                            Careers
                        </a>
                    </div>
                    <div>
                        <a href="#" className={styles.link}>
                            Contact
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )
}