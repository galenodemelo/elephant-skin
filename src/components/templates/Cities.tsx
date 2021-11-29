import Image from "next/image"
import { useEffect, useState } from "react"
import styles from "./Cities.module.sass"

const cityList: {name: string, fullName: string, timeZone: string, timeZoneDescription: string}[] = [
    {name: "Van", fullName: "Vancouver", timeZone: "America/Vancouver", timeZoneDescription: "PST / GMT-8"},
    {name: "LA", fullName: "Los Angeles", timeZone: "America/Los_Angeles", timeZoneDescription: "PST / GMT-8"},
    {name: "NYC", fullName: "New York", timeZone: "America/New_York", timeZoneDescription: "EST / GMT-5"},
    {name: "MIA", fullName: "Miami", timeZone: "America/New_York", timeZoneDescription: "EST / GMT-5"},
    {name: "SP", fullName: "São Paulo", timeZone: "America/Sao_Paulo", timeZoneDescription: "BRT / GMT-3"},
    {name: "SHA", fullName: "Shangai", timeZone: "Asia/Shanghai", timeZoneDescription: "CST / GMT+8"}
]

type Props = {
    fullname?: boolean,
    pinIcon?: boolean,
    triggerAnimation?: boolean
}

export default function Cities({fullname = false, pinIcon = false, triggerAnimation = true, timeZoneDescription = false}: Props) {
    const refreshTimeInSeconds: number = 15
    const [currentDate, setCurrentDate] = useState<Date>(new Date())

    useEffect(() => {
        setTimeout(() => {
            setCurrentDate(new Date())
        }, refreshTimeInSeconds * 1000)
    }, [currentDate])

    return (
        <ul className={styles.cities} data-active={triggerAnimation}>
            {cityList.map((city, index) => {
                return (
                    <li className={styles.city} key={index}>
                        {pinIcon &&
                            <div className={styles.icon}>
                                <Image src="/img/icons/pin.svg" alt="Map pin icon" layout="fill" />
                            </div>
                        }
                        <b className={styles.name}>
                            {fullname ? city.fullName : city.name}
                        </b>
                        <time className={styles.time}>
                            {getCurrentTime(currentDate, city.timeZone)}
                        </time>
                    </li>
                )
            })}
        </ul>
    )
}

function getCurrentTime(currentDate: Date, timeZone: string): string {
    return currentDate.toLocaleTimeString("en-US", {
        timeZone: timeZone,
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    })
}