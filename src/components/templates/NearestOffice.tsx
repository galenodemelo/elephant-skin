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
            
            <a href="#" className="btn btn--ghost">
                All offices
            </a>
        </div>
    )
}