import Image from 'next/image'
import styles from "./Intro.module.sass"

export default function Intro() {
    return (
        <section className={styles.intro}>
            <h1 className={styles.heading}>
                Hello,
            </h1>
            <div className={styles.picto}>
                <Image src="/img/elephant-skin-picto-pink.svg" layout="fill" />
            </div>
        </section>
    )
}