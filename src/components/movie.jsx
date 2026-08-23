function Movie(props) {

    return (
        <section>
            <h1>{props.title || "Movie Title"}</h1>
        </section>
    )
}


export default Movie