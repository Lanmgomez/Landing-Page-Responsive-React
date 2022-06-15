import style from './Form.module.css'

const Form = () => {
    return(
       <form className={style.form}>
           <div>
               <p className={style.textform}>Preencha o formulário para receber os detalhes do evento</p>
           </div>
                <div>    
                    <label>Nome</label>
                    <input type="text" placeholder="Digite seu nome" />
                </div>
                <div>    
                    <label>E-mail</label>
                    <input type="text" placeholder="Digite seu e-mail" />
                </div>
                <div>
                    <label>Telefone</label>        
                    <input type="text" placeholder="Digite seu número de WhatsApp" />
                </div>
                <div>
                    <label>Principal interesse</label>
                        <select>
                            <option disable select>Selecione</option>
                            <option value="apartment">Apartamentos</option>
                            <option value="house">Casas</option>
                            <option value="garden">Jardins</option>
                            <option value="others">Outros</option>
                        </select>
                </div>
                <div>
                    <input className={style.btn} type="button" value="quero me inscrever" />
                </div>
       </form>
    )
}

export default Form