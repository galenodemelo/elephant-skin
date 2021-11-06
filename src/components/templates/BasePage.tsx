import styles from "./BasePage.module.sass"
import { Swiper, SwiperSlide } from "swiper/react"
import { Mousewheel } from "swiper"

import "swiper/css"
import "swiper/css/mousewheel"
import { SwiperModule } from "swiper/types"
import React from "react"

import Customers from "@components/templates/Customers"
import Footer from "@components/templates/Footer"
import HighlightedProjects from "@components/templates/HighlightedProjects"

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
            {children.map((child: JSX.Element, index: number) => addSlide(child, index))}


            {addSlide(<HighlightedProjects />)}
            {addSlide(<Customers />)}
            {addSlide(<Footer />)}
        </Swiper>
    )
}

function addSlide(component: JSX.Element, index?: number): JSX.Element {
    return (
        <SwiperSlide key={index}>
            {({isActive}) => React.cloneElement(component, { isActive })}
        </SwiperSlide>
    )
}

function setSlideAsActive(swiper) {
    swiper.el.querySelector(".swiper-slide-active section").setAttribute("data-active", "true")
}