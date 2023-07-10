import { useState } from 'react';
import './App.css';
import Home from './page/Home/Home';
import Detalhes from './page/Detalhes/Detalhes'
import StyledGlobal, { CorFundo } from './styledGlobal';

function App() {
  const [TrocarDePagina, setTrocarDePagina] = useState()


  const changepage = (change) =>{
    setTrocarDePagina(change)
    

  }

  return (
    <>
      <CorFundo>
        <StyledGlobal />
        {TrocarDePagina === "0" ? (
      <Home pagina={()=> changePage("0")}/>
    ) : (
      <Detalhes pagina={()=> changePage("1")}/>
    )}
        

      </CorFundo>
    </>
  );
}

export default App;