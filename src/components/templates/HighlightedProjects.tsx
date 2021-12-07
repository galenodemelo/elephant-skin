import Link from "next/link"
import styles from "./HighlightedProjects.module.sass"
import ProjectList from "./ProjectList"

export default function HighlightedProjects() {
    return (
        <section className={styles.highlightedProjects}>
            <div className="grid-centered">
                <header className={styles.header}>
                    <div className={styles.intro}>
                        <h2 data-play-on-active>Highlighted projects</h2>
                        <p data-play-on-active>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        </p>
                        <p data-play-on-active>
                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla.
                        </p>
                    </div>

                    <div className={styles.decorative}>
                        <small data-play-on-active>Reasons to be</small>
                        <span data-play-on-active>Proud!</span>
                    </div>
                </header>

                <ProjectList projectList={new Array(2).fill(0)} />

                <div className="content-centered">
                    <Link href="/stories">
                        <a className={[styles.btn, "btn", "btn--pink"].join(" ")} data-play-on-active>
                            All stories
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )
}