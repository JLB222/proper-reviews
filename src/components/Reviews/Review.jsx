import comments from '../../commentsDBPlaceholder.json'

function Review(props) {
    const work = props.data
    // const relevantComments = comments.filter()

    function renderComments(score) {
        const numberOfComments = Math.abs(score - 5)

        return (
            <>
                {Array.from({ length: numberOfComments }, (_, index) => (
                    <p key={index} className="comment">Comment {index + 1}</p>
                ))}
            </>
        )
    }

    return (
        <section className="review">
            {work.pillarWritingScore && 
                <div className="comments writing">
                    <h3 className="pillar">Writing: <span className="score">{work.pillarWritingScore}</span></h3>
                    {renderComments(work.pillarWritingScore)}
                </div>
            }
            {work.pillarVisualsScore && 
                <div className="comments visuals">
                    <h3 className="pillar">Visuals: <span className="score">{work.pillarVisualsScore}</span></h3>
                    {renderComments(work.pillarVisualsScore)}
                </div>
            }
            {work.pillarSoundScore && 
                <div className="comments sound">
                    <h3 className="pillar">Sound: <span className="score">{work.pillarSoundScore}</span></h3>
                    {renderComments(work.pillarSoundScore)}
                </div>
            }
            {work.pillarPerformanceScore && 
                <div className="comments performance">
                    <h3 className="pillar">Performance: <span className="score">{work.pillarPerformanceScore}</span></h3>
                    {renderComments(work.pillarPerformanceScore)}
                </div>
            }
        </section>
    )
}


export default Review


//eventually we will add books, comics, etc, where the pillars will be different, so having each pillar rendered with && means we can eventually put all of the pillars here and only the relevant ones will render.