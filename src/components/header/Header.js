import Form from './Form'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.pic01}>
            <div className={styles.indecor}>
            <h1>InDecor</h1>
                <p className={styles.event}>UM EVENTO PARA REVOLUCIONAR A SUA CRIATIVIDADE</p>
                <p>Data do evento:</p>
                <p className={styles.may28}>Domingo, 28 de Maio, a partir das 14h.</p>
            </div>   
            <div> 
                <Form />
            </div>    
        </div>
    )
}

export default Header