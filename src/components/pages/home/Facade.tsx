import Image from "next/image"
import styles from "./Facade.module.sass"

export default function Facade() {
    return (
        <section className={styles.facade}>
            <div className={styles.brush}>
                <Image src="/img/decorative/facade-3d-model.png" layout="fill" objectFit="cover" />
            </div>
            <h2 className={styles.heading}>
                <small>We <br />make it</small>
                <span>real.</span>
            </h2>
        </section>
    )
}