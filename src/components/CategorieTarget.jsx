import './categories.css';

export const CategorieTarget = ({url, title}) => {
  return (
   <div className='grilla-items'>
    <img src={url} alt={title} className='imagen-gif'/>
    <h4>{title}</h4>
   </div>
  )
}
