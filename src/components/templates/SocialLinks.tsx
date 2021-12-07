import Image from "next/image"
import styles from "./SocialLinks.module.sass"

type Props = {
    triggerAnimation?: boolean
}

export default function SocialLinks({triggerAnimation = true}: Props) {
    return (
        <nav className={styles.socialLinks} data-active={triggerAnimation}>
            <div className={styles.link} data-play-on-active>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image src="/img/icons/youtube.svg" layout="fill" alt="YouTube logo" loading="eager" />
                </a>
            </div>
            <div className={styles.link} data-play-on-active>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image src="/img/icons/linkedin.svg" layout="fill" alt="LinkedIn logo" loading="eager" />
                </a>
            </div>
            <div className={styles.link} data-play-on-active>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image src="/img/icons/instagram.svg" layout="fill" alt="Instagram logo" loading="eager" />
                </a>
            </div>
        </nav>
    )
}