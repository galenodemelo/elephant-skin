import Slide, { SlideProps } from "./Slide";
import styles from "./TheJourney.module.sass"

export default function TheJourney(props: SlideProps) {
    return (
        <Slide title="The journey" {...props}>
            <p>We was born from an urge to tell stories. Stories that matter and resonate. It has all about been remarkable and making people feel connected, but why keep these stories local?</p>
            <p>If there is something that Elephant Skin is not, it is local. We are not attached to places. We are global. We make the world smaller, and we bring talents together. Creativity is too big to be local, and wherever has people, it has Elephant Skin!</p>
            <p>We care so much that every project is our project, we think like a client, we work to make ourselves proud, and hell yeah, we are motivated as Fu%#!</p>
            <p>Real Estate is not for amateurs! That{"'"}s why our Elephants come from different backgrounds, to add value, look from another perspective and make a project stand out in a genuine, powerful, and honest way.</p>
            <p>We are fierce, compelling, creative, and the Elephants are definitely taking over the world.</p>

            <h4 className={styles.highlight}>
                <small>The world is full of dogs,</small>
                <div>we are elephants!</div>
            </h4>

            <button className="btn btn--ghost btn--black">
                Elephant{"'"}s letter
            </button>
        </Slide>
    )
}