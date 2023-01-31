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
  

  const [colaboradores, setColaboradores] = useState([])

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
