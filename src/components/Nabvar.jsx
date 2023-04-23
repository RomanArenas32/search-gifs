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
          <a href="#">Busqueda</a>
        </li>
        <li>
          <a href="#">Mi portafolio</a>
        </li>
        <li>
          <a href="#">UseFetch</a>
        </li>
      </ul>
    </nav>
    </>
   
  )
}
