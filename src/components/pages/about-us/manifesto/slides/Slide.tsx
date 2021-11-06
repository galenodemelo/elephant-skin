import styles from "./Slide.module.sass"

export interface SlideProps {
    active?: boolean
}

type Props = {
    active?: boolean,
    children: React.ReactNode,
    title: string
}

export default function Slide({active = false, children, title}: Props) {
    const classList: string[] = [styles.slide]
    if (active) classList.push(styles["slide--active"])

    return (
        <li className={classList.join(" ")}>
            <h3 className={styles.title}>{title}</h3>

            {children}
        </li>
    )
}