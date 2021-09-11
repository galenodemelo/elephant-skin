import styles from "./Cities.module.sass"

const cityList: {name: string, timeZone: string}[] = [
    {name: "Van", timeZone: "America/Vancouver"},
    {name: "LA", timeZone: "America/Los_Angeles"},
    {name: "NYC", timeZone: "America/New_York"},
    {name: "MIA", timeZone: "America/New_York"},
    {name: "SP", timeZone: "America/Sao_Paulo"},
    {name: "SHA", timeZone: "America/Sao_Paulo"}
]

export default function Cities() {
    return (
        <ul className={styles.cities}>
            {cityList.map((city, index) => {
                return (
                    <li className={styles.city} key={index}>
                        <b className={styles.name}>
                            {city.name}
                        </b>
                        <time className={styles.time}>
                            {getCurrentTime(city.timeZone)}
                        </time>
                    </li>
                )
            })}
        </ul>
    )
}

function getCurrentTime(timeZone: string): string {
    return new Date().toLocaleTimeString("en-US", {
        timeZone: timeZone,
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    })
}