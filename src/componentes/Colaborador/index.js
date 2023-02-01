import './Colaborador.css'

const Colaborador = ({nome, imagem, autor, corDeFundo}) => {
    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo}}>
                <img src={imagem}alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{autor}</h5>
            </div>
        </div>
    )
}

export default Colaborador;