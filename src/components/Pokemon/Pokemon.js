import { useFindColorByType } from '../../Hooks/useFindColorByType'
import './Pokemon.css'

const Pokemon = ({ item }) => {
  const typeColor = useFindColorByType(item?.types[0])
  const stylesItem = {
    border: '3px solid' + typeColor,
  }

  const stylesItemId = {
    color: typeColor,
  }

  const stylesItemTitle = {
    background: typeColor,
  }

  return (
    <div className='gallery-item' style={stylesItem}>
      <div className='gallery-item-id' style={stylesItemId}>
        <span>#{item.id}</span>
      </div>
      <div className='gallery-item-img'>
        <img src={item.imageUrl} />
      </div>
      <div className='gallery-item-title' style={stylesItemTitle}>
        <h2>{item.name}</h2>
      </div>
    </div>
  )
}

export { Pokemon }
