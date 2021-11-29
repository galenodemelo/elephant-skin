import Image from "next/image"
import styles from "./Picto.module.sass"

type Props = {
    color: PictoColor
}

export enum PictoColor {
    PINK = "pink",
    WHITE = "white"
}

export default function Picto({ color }: Props) {
    return (
        <div className={styles.picto}>
            <Image src={`/img/elephant-skin-picto-${color}.svg`} layout="fill" alt="X icon" />
        </div>
    )
}