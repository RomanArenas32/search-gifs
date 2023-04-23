
import { CategorieTarget } from "./CategorieTarget";
import "./categories.css";

export const Categories = ({ lista }) => {
  

console.log(lista)



  return (
    <div className="grilla">
      {lista.map((cat) => (

        <CategorieTarget 
        key={cat.id}
        url={cat.images.original.url}
        title={cat.title}
        />
      
      ))}
    </div>
  );
};
