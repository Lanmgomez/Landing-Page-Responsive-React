import style from './MainImage03.module.css'

const MainImage03 = () => {
    return(
        <div className={style.mainimage01}>
            <div className={style.picimg}> </div>
            <div>
            <h1>Objetos</h1>
                <ul>
                    <li>Posicionamento</li>
                    <li>Cadeiras</li>
                    <li>Mesas</li>
                    <li>Espelhos</li>
                    <li>Plantas</li>
                    <li>Cortinas</li>
                    <li className={style.bold}>E muito mais...</li>
                </ul>
            </div>    
        </div>
    )
}

export default MainImage03