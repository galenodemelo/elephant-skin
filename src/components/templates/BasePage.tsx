import styles from "./BasePage.module.sass"
import { Swiper } from "swiper/react"
import { Mousewheel } from "swiper"

import "swiper/css"
import "swiper/css/mousewheel"
import { SwiperModule } from "swiper/types"

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
            mousewheel={true}
            slidesPerView={1}
        >
            {children}
        </Swiper>
    )
}