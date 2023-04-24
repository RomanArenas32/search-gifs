import { useEffect, useState } from "react";
import "./formulario.css";
import axios from "axios";
import { Categories } from "./Categories";

export const Formulario = () => {
  const [inputValue, setInputValue] = useState("");
  const [texto, setTexto] = useState("");
  const [lista, setLista] = useState([]);

  useEffect(() => {
    if (texto !== "") {
      axios
        .get(
          `https://api.giphy.com/v1/gifs/search?api_key=nEMvg9z8WiyWPpWg4kr8wx3HZpnLVmiF&q=${texto}?limit:10`
        )
        .then((response) => setLista(response.data.data))
        .catch((error) => console.error(error));
    }
  }, [texto]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTexto(inputValue);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <form className="formulario" onSubmit={handleSubmit}>
        <label>
          <h3 className="label-text"> Sobre que deseas buscar?</h3>

          <input
          id="buscar"
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="input-texto"
          />
        </label>
        <button type="submit" className="boton-enviar" >
          Buscar
        </button>
      </form>

      <Categories lista={lista} />
    </>
  );
};
