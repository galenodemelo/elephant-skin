import Cities from "@components/templates/Cities"
import SocialLinks from "@components/templates/SocialLinks"

import Image from "next/image"
import styles from "./Location.module.sass"

export default function Location() {
    return (
        <section className={styles.location}>
            <ul className={[styles.cityList, "grid-centered"].join(" ")}>
                <Cities fullname={true} pinIcon={true} timeZoneDescription={true} />
            </ul>

            <footer className={styles.footer}>
                <SocialLinks />

                <button className={styles.button}>
                    <div><Image src="/img/animations/dont-be-shy-contact.gif" layout="fill" objectFit="contain" /></div>
                </button>
            </footer>
        </section>
    )
}