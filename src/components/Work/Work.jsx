import './work.css'

function Work(props) {
    const info = props.data
    return (
        <section className="centering-container work-section">
            <img src={`../images/${info.image}`} alt={`book cover or movie poster for ${info.title}`} />
            <p>Release Date: {info.releaseDate}</p>
        </section>
    )
}


export default Work

// title 
// medium 
// release date 
// image 
// reviews