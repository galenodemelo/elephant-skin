import Image from "next/image"
import { SwiperSlide } from "swiper/react"
import styles from "./Customers.module.sass"

export default function Customers() {
    return (
        <SwiperSlide className={styles.customers}>
            <div className={styles.banner} swiper-scrollable="true">
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
            <h2 className={styles.heading} swiper-scrollable="true">
                They chose to be an Elephant.
            </h2>
        </SwiperSlide>
    )
}