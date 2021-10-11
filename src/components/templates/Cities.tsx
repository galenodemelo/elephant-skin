import { useEffect, useState } from "react"
import styles from "./Cities.module.sass"

const cityList: {name: string, timeZone: string}[] = [
    {name: "Van", timeZone: "America/Vancouver"},
    {name: "LA", timeZone: "America/Los_Angeles"},
    {name: "NYC", timeZone: "America/New_York"},
    {name: "MIA", timeZone: "America/New_York"},
    {name: "SP", timeZone: "America/Sao_Paulo"},
    {name: "SHA", timeZone: "America/Sao_Paulo"}
]

type Props = {
    triggerAnimation?: boolean
}

export default function Cities({triggerAnimation = true}: Props) {
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
                        <b className={styles.name}>
                            {city.name}
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