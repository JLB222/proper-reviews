import Pillar from "./Pillar"


function SubmitReview(props) {
    const {work} = props  //movie, book, tvshow, game, etc, pulled from Work.jsx

    const moviePillars = ["Writing", "Visuals", "Sound", "Performance"]
    const tvPillars = ["Writing", "Visuals", "Sound", "Performance"]
    const bookPillars = ["Writing"]

    function determinePillar(str = work.medium) {
        switch (str) {
            case 'movie': return moviePillars
            case 'tv'   : return tvPillars
            case 'book' : return bookPillars
        }
    }

    async function submitReview(e) {
        e.preventDefault()  //stops default behavior of the form, reloading the page in particular
        console.log('Function: submitReview is working')

        try {
            
            const review = {
                "score": 8,
                "comment": "this is a test"
            };
            console.log(`About to fetch; sending hard-coded review`)
            const response = await fetch("/api/submitReview", {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(review)
            });
            console.log(`Fetch complete`)
            const result = await response.json();

            console.log(result);

        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <section className="centering-container submit-review-container">
            <form onSubmit={submitReview}>
                {determinePillar().map((el,i) => <Pillar key={i} pillarType = {el}/>)}
                <button type="submit">Submit Review</button>
            </form>
        </section>
    )
}

export default SubmitReview