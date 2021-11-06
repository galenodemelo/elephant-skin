export default function Manifesto() {

    return (
        <section className={styles.manifesto}>
            <div className={[styles.container, "grid-centered"].join(" ")}>
                <div className={styles.slideContainer}>
                    {slideList.map((slide: JSX.Element, index: number) => (
                        React.cloneElement(slide, { key: index, active: index === currentIndex })
                    ))}
                </div>

                <nav className={styles.control}>
                    {controlItems}
                </nav>

                <div className={styles.info}>
                    <div className={styles.rotatedText}>
                        Click to discover our <em>manifesto</em>.
                    </div>
                </div>
            </div>
        </section>
    )
}