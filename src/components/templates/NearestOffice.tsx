import styles from "./NearestOffice.module.sass"

type Props = {
    triggerAnimation?: boolean
}

export default function NearestOffice({triggerAnimation = true}: Props) {
    return (
        <div className={styles.nearestOffice} data-active={triggerAnimation}>
            <h6 className={styles.heading} data-play-on-active>
                Nearest office
            </h6>
            <p className={styles.officeName} data-play-on-active>
                Miami - FL
            </p>
            <time className={styles.time} data-play-on-active>
                5:12 pm
            </time>
            
            <a href="#" className={[styles.allOffices, "btn", "btn--ghost"].join(" ")} data-play-on-active>
                All offices
            </a>
        </div>
    )
}