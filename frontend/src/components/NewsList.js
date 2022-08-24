import { formatDistance } from 'date-fns'

const NewsList = ({ anew }) => {

    const { published_at, url, title, kind, domain, currencies } = anew

    return (
        <div className="feed-row">

            <div className="feed-datetime">
                {formatDistance(new Date(published_at), new Date(), { addSuffix: false })}
            </div>

            <div className="feed-title">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <span>{title}</span> <small><i className="fa-solid fa-link"></i> {domain}</small>
                </a>

                <div>
                    <span className="feed-title-kind">({kind})</span>
                    {currencies && currencies.map((currency, index) => (
                        <span className='badge' key={index}>{currency.code}</span>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default NewsList;