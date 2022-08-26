import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



const SearchAssets = () => {

    const [searchAssets, setSearchAssets] = useState('')
    const [resultAssets, setResultAssets] = useState([])

    const handleSearchAssets = (e) => {
        e.preventDefault()
        setSearchAssets(e.target.value)
    }

    useEffect(() => {
        if (searchAssets.length > 1) {
            fetch(`https://api.coincap.io/v2/assets?search=${searchAssets}&limit=5`)
                .then(res => res.json())
                .then(json => setResultAssets(json.data))
        } else {
            setResultAssets('')
        }
    }, [searchAssets])


    return (
        <div>
            <input
                onChange={handleSearchAssets}
                className="searchbar"
                placeholder="search a coin..."
                autoComplete="off"
            />

            <div className='search-results'>
                {resultAssets && resultAssets.map((asset, index) =>
                (<Link to={`/assets/${asset.id}`} key={index}>

                    <img
                        width={30}
                        height={30}
                        loading="lazy"
                        src={`https://assets.coincap.io/assets/icons/${String(asset.symbol).toLowerCase()}@2x.png`}
                        alt={asset.symbol}
                    />
                    <div>
                        <small><strong>[{asset.symbol}]</strong></small>
                        <p>{`${asset.name}`}</p>
                    </div>
                </Link>)
                )}
            </div>
        </div>
    );
}

export default SearchAssets;