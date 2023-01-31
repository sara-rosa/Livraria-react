import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar os livros</h2>
                <CampoTexto label="Titulo" placeholder="Digite o título do livro" />
                <CampoTexto label="Genero" placeholder="Digite o genero do livro" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}

export default Formulario