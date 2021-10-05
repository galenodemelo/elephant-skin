import styles from "./HighlightedProjects.module.sass"

export default function HighlightedProjects() {
    return (
        <section className={styles.highlightedProjects}>
            <div className="grid-centered">
                <header className={styles.header}>
                    <div className={styles.intro}>
                        <h2>Highlighted projects</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        </p>
                        <p>
                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla.
                        </p>
                    </div>

                    <div className={styles.decorative}>
                        <small>Reasons to be</small>
                        <span>Proud!</span>
                    </div>
                </header>
            </div>
        </section>
    )
}