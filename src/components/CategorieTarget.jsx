import './categories.css';

export const CategorieTarget = ({url, title}) => {
  return (
   <div className='grilla-items'>
    <img src={url} alt={title} />
    <h4>{title}</h4>
   </div>
  )
}
