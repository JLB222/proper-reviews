function Work(props) {
    const info = props.workData
    return (
        <section>
            <img src={`images/${info.image}`} alt={`book cover or movie poster for ${info.title}`} />
            <h1>{info.medium}: {info.title || "Title of Work"}</h1>
            <ul>
                <li>{info.releaseDate}</li>
                <li>Number of Reviews: {info.numberOfReviews}</li>
            </ul>
        </section>
    )
}


export default Work

// title 
// medium 
// rlease date 
// image 
// reviews