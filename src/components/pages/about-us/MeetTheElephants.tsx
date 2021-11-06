import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import styles from "./MeetTheElephants.module.sass"

export default function MeetTheElephants() {
    return (
        <section className={styles.meetTheElephants}>
            <div className="grid-centered">
                <h2 className={styles.heading}>
                    Meet <br />
                    the  <br />
                    elephants
                </h2>

                <div className={styles.sliderContainer}>
                    <Swiper
                        className={styles.slider}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: `.${styles["control--prev"]}`,
                            nextEl: `.${styles["control--next"]}`
                        }}
                        slidesPerView={4}
                    >
                        {new Array(10).fill(0).map((_, index) => (
                            <SwiperSlide key={index}>
                                <Image src="/img/crew/example.png" layout="fill" objectFit="contain" />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <nav className={styles.controls}>
                        <button className={[styles.control, styles["control--prev"]].join(" ")}></button>
                        <button className={[styles.control, styles["control--next"]].join(" ")}></button>
                    </nav>
                </div>
            </div>
        </section>
    )
}