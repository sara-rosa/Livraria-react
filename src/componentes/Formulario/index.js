import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    

    const [nome, setNome] = useState('')
    const [autor, setAutor] = useState('')
    const [imagem, setImagem] = useState('')
    const [livro, setLivro] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            autor,
            imagem,
            livro
        })
        setNome('')
        setAutor('')
        setImagem('')
        setLivro('')
        
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar os livros.</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Título" 
                    placeholder="Digite o título do livro"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}l
                    />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Autor" 
                    placeholder="Digite o autor do livro"
                    valor={autor}
                    aoAlterado={valor => setAutor(valor)}
                    />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o enderaço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    />
                <ListaSuspensa 
                obrigatorio={true} 
                label="Gênero" 
                itens={props.livros}
                valor={livro}
                aoAlterado={valor => setLivro(valor)}
                />
                <Botao>Adicionar Livro</Botao>
            </form>
        </section>
    )
}

export default Formulario;