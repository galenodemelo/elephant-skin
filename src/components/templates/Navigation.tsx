import Link from "next/link"
import styles from "./Navigation.module.sass"

const linkList: Array<{ name: string, link: string }> = [
    { name: "Hello", link: "/aboutUs" },
    { name: "Stories", link: "/stories" },
    { name: "Moodboard", link: "#" },
    { name: "Careers", link: "#" },
    { name: "Contact", link: "/contact" },
]

type Props = {
    isOpened: boolean,
    setOpened: (opened: boolean) => void
}

export default function Navigation({ isOpened, setOpened }: Props) {
    return (
        <nav className={styles.nav} data-opened={isOpened}>
            {linkList.map(({ name, link }, index) => {
                return (
                    <Link href={link} key={index}>
                        <a className={styles.link} onClick={() => setOpened(false)}>
                            {name}
                        </a>
                    </Link>
                )
            })}
        </nav>
    )
}
