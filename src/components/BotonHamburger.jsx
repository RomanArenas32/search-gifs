import "./nabvar.css";

export const BotonHamburger = ({ handleDisplayNabvar, esVisible }) => {

    const estilo1 = {
        display: "flex",
        position: "absolute"
      };
    
      const estilo2 = {
        display: "block",
        position: "relative",
        color: "white"
      };
    
      const definitiveStyle = esVisible ? estilo1 : estilo2;


  return (
    <button
      className="boton-hamburguesa"
      aria-label="Menú"
      aria-expanded="false"
      onClick={handleDisplayNabvar}
      style={definitiveStyle}
      
    >
      <span className="linea"></span>
      <span className="linea"></span>
      <span className="linea"></span>
    </button>
  );
};
