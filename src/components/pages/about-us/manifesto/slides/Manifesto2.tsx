import styles from './Manifesto2.module.sass'

import Image from "next/image"
import Slide, { SlideProps } from "./Slide"

export default function Manifesto2(props: SlideProps) {
    return (
        <Slide title="Manifesto #2" {...props}>
            <div className={styles.box}>
                <button className={styles.close}>
                    <Image src="/img/icons/close.svg" layout="fill" alt="X icon" />
                </button>

                <div className={styles.text}>
                    Don't <br />
                    grow up. <br />
                    It's a <br />
                    trap!
                </div>

                <div className={styles.picto}>
                    <Image src="/img/elephant-skin-picto-pink.svg" layout="fill" alt="X icon" />
                </div>
            </div>
        </Slide>
    )
}