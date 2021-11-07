import styles from "./List.module.sass"
import ProjectList from "@components/templates/ProjectList"

export default function List() {
    return(
        <section className={styles.list}>
            <div className={styles.container}>
                <div className="grid-centered">
                    <ProjectList projectList={new Array(11).fill(0)} />
                </div>

                <div className="content-centered">
                    <a className="btn btn--pink">
                        Load more
                    </a>
                </div>
            </div>
        </section>
    )
}
