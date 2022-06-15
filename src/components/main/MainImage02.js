import style from './MainImage02.module.css'

const MainImage02 = () => {
    return(
        <div className={style.mainimage01}>
            <div>
            <h1>Detalhes</h1>
                <ul>
                    <li>Posicionamento</li>
                    <li>Aproveitamento de espaço</li>
                    <li>Combinação de cores</li>
                    <li>Organização</li>
                    <li className={style.bold}>E muito mais...</li>
                </ul>
            </div>    
            <div className={style.picimg}> </div>
        </div>
    )
}

export default MainImage02