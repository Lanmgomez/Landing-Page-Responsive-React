import styles from './MainState.module.css'

const MainState = () => {
    return(
        <div className={styles.backimg}>
            <p className={styles.prua}>Rua do evento, 1333 Bairro Abertura: 14h</p>
            <div className={styles.local}>
                <h1>Local de destaque</h1>
                <p>O evento será realizado em um local prestigiado pelos amantes de Design de Interiores, onde teremos exemplos de vários ambientes, tanto internos como externos.</p>
            </div>
        </div>
    )
}

export default MainState