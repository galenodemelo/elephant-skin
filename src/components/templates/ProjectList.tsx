import ProjectItem from "./ProjectItem"
import styles from "./ProjectList.module.sass"

type Props = {
    projectList: Array<any>
}

export default function ProjectList({ projectList }: Props) {
    return (
        <nav className={styles.projectList}>
            {projectList.map((project, index) => ( <ProjectItem key={index} /> ))}
        </nav>
    )
}