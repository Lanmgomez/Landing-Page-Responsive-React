import styles from './Main.module.css'

const Main = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>O que você vai aprender</h1>
            <div className={styles.circlesphrases}>
                <div className={styles.circles01}></div>
                <p>Alguma coisa muito legal, que vai fazer diferença na vida das pessoas.</p>
            </div>
            <div className={styles.circlesphrases}>
                <div className={styles.circles02}></div>
                <p>Alguma coisa muito legal, que vai fazer diferença na vida das pessoas.</p>
            </div>
            <div className={styles.circlesphrases}>
                <div className={styles.circles03}></div>
                <p>Alguma coisa muito legal, que vai fazer diferença na vida das pessoas.</p>
            </div>
        </div>
    )
}

export default Main