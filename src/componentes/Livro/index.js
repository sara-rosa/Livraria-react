import Colaborador from '../Colaborador'
import './Livro.css'
 
const Livro = (props) => {
    const css = { backgroundColor:props.corSecundaria }

    return (
        (props.colaboradores.length > 0) ? <section className='livro' style={ css }>
            <h3 style={{ borderColor: props.corPrimaria }}>{ props.nome }</h3>  
            <div className='colaboradores'>
            {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} genero={colaborador.genero} imagem={colaborador.imagem} />)}
            </div>
        </section>
        : ''
    )
}

export default Livro;