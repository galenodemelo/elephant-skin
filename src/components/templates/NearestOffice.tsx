import styles from "./NearestOffice.module.sass"

type Props = {
    triggerAnimation?: boolean
}

export default function NearestOffice({triggerAnimation = true}: Props) {
    return (
        <div className={styles.nearestOffice} data-active={triggerAnimation}>
            <h6 className={styles.heading}>
                Nearest office
            </h6>
            <p className={styles.officeName}>
                Miami - FL
            </p>
            <time className={styles.time}>
                5:12 pm
            </time>
            
            <a href="#" className={[styles.allOffices, "btn", "btn--ghost"].join(" ")}>
                All offices
            </a>
        </div>
    )
}