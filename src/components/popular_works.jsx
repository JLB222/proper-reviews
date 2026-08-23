import Movie from './movie'

function PopularWorks(props) {
    return (
        <section>
            <h1>Popular Lately</h1>
            <Movie
                title = {props.titles[0]}
            />
            <Movie
                title = {props.titles[1]}
            />
            <Movie
                title = {props.titles[2]}
            />
        </section>
    )
}


export default PopularWorks