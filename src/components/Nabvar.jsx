import { useState } from 'react';
import { BotonHamburger } from './BotonHamburger';
import './nabvar.css';

export const Nabvar = () => {

    const [esVisible, setEsVisible] = useState(true);

    const handleDisplayNabvar = () => {
      setEsVisible(!esVisible);
    };
  return (
    <>
    <BotonHamburger handleDisplayNabvar={handleDisplayNabvar} esVisible={esVisible}/>
     <nav style={{ display: esVisible ? "flex" : "none" }}>
      <ul>
      
        <li>
          <a href="https://portafolio-roman-arenas.netlify.app">Mi portafolio</a>
        </li>
        <li>
          <a href="https://github.com/RomanArenas32/PORTAFOLIO">Mi Github</a>
        </li>
        <li>
        <a href="https://github.com/RomanArenas32/search-gifs">Codigo del proyecto</a>
      </li>
      </ul>
    </nav>
    </>
   
  )
}
