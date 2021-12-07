import Image from "next/image"
import styles from "./ProjectItem.module.sass"

export default function ProjectItem() {
    return (
        <a href="#" className={styles.projectItem} data-play-on-active>
            <Image src="/img/projects/example.jpg" layout="fill" objectFit="cover" />

            <div className={styles.info}>
                <h3 className={styles.title}>
                    <small>Galbut Family Office</small>
                    <span>Natiivo Miami</span>
                </h3>
                <p className={styles.description}>
                    Branding | 3D Renderings | Film Production
                </p>
            </div>
        </a>
    )
}