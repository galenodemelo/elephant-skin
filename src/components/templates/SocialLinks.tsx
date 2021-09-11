import Image from "next/image"
import styles from "./SocialLinks.module.sass"

export default function SocialLinks() {
    return (
        <nav className={styles.socialLinks}>
            <div className={styles.link}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image src="/img/icons/youtube.svg" layout="fill" alt="YouTube logo" />
                </a>
            </div>
            <div className={styles.link}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image src="/img/icons/linkedin.svg" layout="fill" alt="LinkedIn logo" />
                </a>
            </div>
            <div className={styles.link}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image src="/img/icons/instagram.svg" layout="fill" alt="Instagram logo" />
                </a>
            </div>
        </nav>
    )
}