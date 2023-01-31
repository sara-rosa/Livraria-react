import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Livro from './componentes/Livro';



function App() {

  const livros = [
    { 
      nome: 'Romance',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    { 
      nome: 'Suspense',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    { 
      nome: 'Infantis',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2'
    },
    { 
      nome: 'Aventura',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    { 
      nome: 'Conto',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    },
    { 
      nome: 'Horror',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    { 
      nome: 'Memórias e autobiografia',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    },
  ]

  const inicial = [
    {
      nome: 'Pinoquio',
      genero: 'Machado de Assis',
      imagem:'https://3.bp.blogspot.com/-64t5BU1aJVk/T_2YEDuz5qI/AAAAAAAAHKk/aBX0FSd9D9g/s1600/pin.jpg',
      livro: livros[3].nome
    },
    {
      nome: 'Sete Ossos',
      genero: 'Rosa Amanda Strausz',
      imagem:'https://globaleditora.com.br/capas/400/3525.jpg',
      livro: livros[5].nome
    },
    {
      nome: 'O Livro dos Espíritos',
      genero: 'Alan Kardec',
      imagem:'https://images-na.ssl-images-amazon.com/images/I/91s604HrQWL.jpg',
      livro: livros[6].nome
    },
    {
      nome: 'A Última Música',
      genero: 'Nicolas Sparks',
      imagem:'http://3.bp.blogspot.com/-e7CKs9bCz7w/UPDHDf27cxI/AAAAAAAAAZQ/AkR5gadtor8/s1600/ultima_musica.jpg',
      livro: livros[1].nome
    }
  ]
  

  const [colaboradores, setColaboradores] = useState(inicial)

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
        <Banner/>
        <Formulario livros={livros.map(livros => livros.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

        {livros.map(livro => <Livro 
        key={livro.nome} 
        nome={livro.nome} 
        corPrimaria={livro.corPrimaria} 
        corSecundaria={livro.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.livro === livro.nome)}
        />)}
       
        
        
    </div>
    
  );
}

export default App;
