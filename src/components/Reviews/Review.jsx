import Pillar from './Pillar'
//data will be inherited from a WorkPage component; it will create a generic section and inside is an array map for all the reviews from the database
function Review(props) {
    const {medium} = props  //movie, book, tvshow, game, etc
    const moviePillars = ["Writing", "Visuals", "Sound", "Performance"]
    const tvPillars = []
    const bookPillars = []

    return (
        <section className="centering-container">
                <Pillar />
                <Pillar />
                <Pillar />
                <Pillar />
        </section>
    )
}

export default Review

//can we make a dynamic number of pillars based on the medium?