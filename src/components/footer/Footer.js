import style from './Footer.module.css'

const Footer = () => {
    return (
        <div>
            <div className={style.backgroundfinal}>
                <p>Gostou? Então se inscreva:</p>
                <button>Solicitar Inscrição</button>
            </div>
            <div className={style.finaldiv}>
                <h1>InDecor</h1>
                    <p>A evolução da decoração de interiores</p>
                    <p><b>Entre em contato:</b> oi@indecor.com.br</p>
                    <p><b>Ou pelo telefone:</b> (55)99990-9999</p>
            </div>
        </div>
    )
}

export default Footer