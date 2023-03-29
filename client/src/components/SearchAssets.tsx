import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Turnstone from 'turnstone'

// https://blog.logrocket.com/create-customizable-react-search-component-autocomplete/

// Turnstone params

const maxItems = 5
const listbox = [
  {
    id: 'name',
    ratio: 1,
    displayField: 'id',
    data: (query) =>
      fetch(`/api/assets/get?search=${encodeURIComponent(query)}&limit=${maxItems}`)
        .then((response) => response.json())
        .then((json) => json.data),
    searchType: 'startswith',
  },
]

const Item = ({ item }) => {
  return (
    <Link to={`/assets/${item.id}`}>
      <img
        width={30}
        height={30}
        loading='lazy'
        src={`https://assets.coincap.io/assets/icons/${String(item.symbol).toLowerCase()}@2x.png`}
        alt={item.symbol}
      />
      <div>
        <small>
          <strong>[{item.symbol}]</strong>
        </small>
        <p>{`${item.name}`}</p>
      </div>
    </Link>
  )
}

const SearchAssets = () => {
  const navigate = useNavigate()
  const [assetPath, setAssetPath] = useState('')

  useEffect(() => {
    assetPath && navigate(`/assets/${assetPath}`)
  }, [assetPath])

  const handleToAsset = (selectedItem, displayField) => {
    if (typeof selectedItem !== 'undefined') {
      // console.log(selectedItem.id) // log for dev test
      setAssetPath(selectedItem.id)
    }
  }

  return (
    <div id='search-box'>
      <Turnstone
        debounceWait={250}
        id='searchbar'
        listbox={listbox}
        listboxIsImmutable={true}
        matchText={true}
        maxItems={maxItems}
        name='assets'
        noItemsMessage="We didn't found, please try again..."
        placeholder='search a coin...'
        typeahead={true}
        Item={Item}
        onSelect={handleToAsset}
      />
    </div>
  )
}

export default SearchAssets
