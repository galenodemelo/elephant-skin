import Image from "next/image"
import styles from "./Header.module.sass"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={[styles.headerBar, "grid-centered"].join(" ")}>
                <div className={styles.logo}>
                    <a href="#">
                        <Image src="/img/elephant-skin-logo.svg" layout="fill" alt="Elephant Skin pink logo, composed by a lettering and an elephant icon at the end" />
                    </a>
                </div>

                <button className={styles.button}>
                    <hr />
                    <hr />
                    <hr />
                </button>
            </div>
        </header>
    )
}