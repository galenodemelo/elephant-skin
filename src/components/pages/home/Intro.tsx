import PoppingLetters from "@components/animated/PoppingLetters"
import Cities from "@components/templates/Cities"
import { useRef, useState } from "react"
import styles from "./Intro.module.sass"

export default function Intro({ isActive }) {
    const videoPlayer = useRef<HTMLVideoElement>()
    const [soundExperienceState, setSoundExperienceState] = useState(false)
    
    function toggleSoundExperience(state?: boolean) {
        if (state !== null) {
            setSoundExperienceState(state)
            return
        }

        setSoundExperienceState(!soundExperienceState)
    }

    return (
        <section className={styles.intro} data-sound-experience={soundExperienceState} onClick={() => toggleSoundExperience(null)}>
            <video autoPlay={true} muted={!soundExperienceState} className={styles.background} ref={videoPlayer} loop={true}>
                <source src="/video/home/intro.webm" type="video/webm" />
            </video>

            <div className={styles.content} data-visible={!soundExperienceState}>
                <div className="grid-centered">
                    <h1 className={styles.lettering}>
                        <PoppingLetters triggerAnimation={isActive} animationDelay={1000} animationDuration={1200}>The</PoppingLetters>
                        <div data-play-on-active>world</div>
                        <PoppingLetters triggerAnimation={isActive} animationDelay={1100} animationDuration={100}>is full of dogs,</PoppingLetters>
                        <PoppingLetters triggerAnimation={isActive} animationDelay={1500} animationDuration={2000} invert={true}>be an</PoppingLetters>
                        <PoppingLetters triggerAnimation={isActive} animationDelay={1400} animationDuration={100}>elephant!</PoppingLetters>
                    </h1>

                    <div className={styles.cityList}>
                        <Cities />
                    </div>
                </div>
            </div>
        </section>
    )
}