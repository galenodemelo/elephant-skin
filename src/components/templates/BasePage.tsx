import styles from "./BasePage.module.sass"
import { Swiper, SwiperSlide } from "swiper/react"
import { Mousewheel } from "swiper"

import "swiper/css"
import "swiper/css/mousewheel"
import { SwiperModule } from "swiper/types"
import React from "react"

type Props = {
    children: JSX.Element[]
}

export default function BasePage({ children }: Props) {
    const modulesList: Array<SwiperModule> = [Mousewheel]

    return (
        <Swiper
            className={styles.basePage}
            direction="vertical"
            modules={modulesList}
            mousewheel={{
                eventsTarget: ".swiper-slide > section > *:not([swiper-not-scrollable])"
            }}
            onInit={setSlideAsActive}
            onSlideChangeTransitionEnd={setSlideAsActive}
            preloadImages={true}
            speed={800}
            slidesPerView={1}
        >
            {children.map((child: JSX.Element, index: number) => {
                return (
                    <SwiperSlide key={index}>
                        {({isActive}) => React.cloneElement(child, { isActive })}
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

function setSlideAsActive(swiper) {
    swiper.el.querySelector(".swiper-slide-active section").setAttribute("data-active", "true")
}