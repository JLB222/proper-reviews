
function SubmitReview(props) {
    const {workMedium} = props.data.medium  //movie, book, tvshow, game, etc, pulled from ReviewSection

    const moviePillars = ["Writing", "Visuals", "Sound", "Performance"]
    const tvPillars = ["Writing", "Visuals", "Sound", "Performance"]
    const bookPillars = ["Writing"]

    function determinePillar(str = workMedium) {
        switch (str) {
            case 'movie': return moviePillars
            case 'tv'   : return tvPillars
            case 'book' : return bookPillars
        }
    }

    return (
        <section className="centering-container review-section">
            {determinePillar().map((el) => <Pillar pillarType = {el}/>)}
        </section>
    )
}

export default SubmitReview