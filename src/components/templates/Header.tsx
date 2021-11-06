import Cities from "./Cities"
import Link from "next/link"
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
                    <Link href="/">
                        <Image src="/img/elephant-skin-logo.svg" layout="fill" alt="Elephant Skin pink logo, composed by a lettering and an elephant icon at the end" />
                    </Link>
                </div>

                <button className={styles.button} onClick={() => setOpened(!opened)}>
                    {!opened 
                        ? <Image src="/img/icons/menu-animation.gif" layout="fill" alt="Bars animation growing and shrinking" />
                        : <Image src="/img/icons/close.svg" layout="fill" alt="X icon" />}
                </button>
            </div>

            <div className={styles.menu}>
                <div className={[styles.content, "grid-centered"].join(" ")}>
                    <div className={styles.contact}>
                        <SocialLinks />
                        <Cities />
                        <HelperLinks />
                    </div>

                    <nav className={styles.nav}>
                        <Link href="/aboutUs">
                            <a className={styles.link} onClick={() => setOpened(false)}>
                                Hello
                            </a>
                        </Link>
                        <Link href="#">
                            <a className={styles.link} onClick={() => setOpened(false)}>
                                Stories
                            </a>
                        </Link>
                        <Link href="#">
                            <a className={styles.link} onClick={() => setOpened(false)}>
                                Moodboard
                            </a>
                        </Link>
                        <Link href="#">
                            <a className={styles.link} onClick={() => setOpened(false)}>
                                Careers
                            </a>
                        </Link>
                        <Link href="#">
                            <a className={styles.link} onClick={() => setOpened(false)}>
                                Contact
                            </a>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}