import Image from "next/image"
import styles from "./Customers.module.sass"

export default function Customers() {
    return (
        <section className={styles.customers}>
            <div className={styles.banner}>
                <Image src="/img/decorative/elephant-draw-customers.png" layout="fill" objectFit="cover" objectPosition="right top" /> 
            </div>
            <ul className={styles.customerList} swiper-not-scrollable="true">
                {[...Array(24)].map((_, i) => {
                    return (
                        <li key={i}>
                            <Image src="/img/customers/logo.png" width="150" height="150" objectFit="contain" />
                        </li>
                    )
                })}
            </ul>
            <h2 className={styles.heading}>
                They chose to be an Elephant.
            </h2>
        </section>
    )
}