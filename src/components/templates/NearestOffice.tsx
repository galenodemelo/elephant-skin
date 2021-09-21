import styles from "./NearestOffice.module.sass"

export default function NearestOffice() {
    return (
        <div className={styles.nearestOffice}>
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