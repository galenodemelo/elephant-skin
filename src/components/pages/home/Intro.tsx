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
        </section>
    )
}