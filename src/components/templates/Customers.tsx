import Image from "next/image"
import styles from "./Customers.module.sass"

export default function Customers() {
    return (
        <section className={styles.customers}>
            <div className={styles.banner} data-play-on-active>
                <Image src="/img/decorative/elephant-draw-customers.png" layout="fill" objectFit="cover" objectPosition="right top" loading="eager" /> 
            </div>
            <ul className={styles.customerList} swiper-not-scrollable="true" data-play-on-active>
                {[...Array(24)].map((_, i) => {
                    return (
                        <li key={i}>
                            <Image src="/img/customers/logo.png" width="150" height="150" objectFit="contain" />
                        </li>
                    )
                })}
            </ul>
            <h2 className={styles.heading} data-play-on-active>
                They chose to be an Elephant.
            </h2>
        </section>
    )
}