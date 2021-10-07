import Cities from "@components/templates/Cities"
import { useRef, useState } from "react"
import styles from "./Intro.module.sass"

export default function Intro() {
    const videoPlayer = useRef<HTMLVideoElement>()
    const [videoPlayerFocusState, setVideoPlayerFocusState] = useState(true)
    
    return (
        <section className={styles.intro}>
            <video autoPlay={true} muted={true} className={styles.background} ref={videoPlayer} loop={true}>
                <source src="/video/home/intro.webm" type="video/webm" />
            </video>

            <div className={styles.content}>
                <div className="grid-centered">
                    <h1 className={styles.lettering}>
                        <span>The</span>
                        <span>world</span>
                        <span>is full of dogs,</span>
                        <span>be an</span>
                        <span>elephant!</span>
                    </h1>

                    <div className={styles.cityList}>
                        <Cities />
                    </div>
                </div>
            </div>
        </section>
    )
}