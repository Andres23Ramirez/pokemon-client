import './Pokemon.css'

const Pokemon = ({ key, item }) => {
  return (
    <div key={key} className='gallery-item'>
      <div className='gallery-item-id'>
        <span>#{item.id}</span>
      </div>
      <div className='gallery-item-img'>
        <img src={item.imageUrl} />
      </div>
      <div className='gallery-item-title'>
        <h2>{item.name}</h2>
      </div>
    </div>
  )
}

export { Pokemon }
