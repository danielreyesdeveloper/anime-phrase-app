import './quote.css'

export default function Quote({quote}) {
    return (
        <div className="quote-container">
            <blockquote className="quote">
                <p>{quote.quote}</p>
            </blockquote>
            <div className="anime">Anime: {quote.anime}</div>
            <div className="character">Character: {quote.character}</div>
        </div>
    )
}
