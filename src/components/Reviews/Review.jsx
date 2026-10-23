
function Review(props) {
    const {comments, ratings, user} = props.data  //props.data is an object containing comments(array of comment objects), ratings(array of ratings objects), and the userID(integer)

    console.log("review data:", props.data, "userID:", user)
    console.log("ratings:", ratings, "comments:", comments)

    return (
        <section className="review">
            <cite>User: {user}</cite>
            {ratings
                .sort((a,b) => (b.pillar).localeCompare(a.pillar))  //ensures the order of pillar presentation is the same across every work
                .map((rating) => 
                    <div className={rating.pillar}>
                        <h3 className="pillar">{rating.pillar}: <span className="score">{rating.score}</span></h3>
                        <ul className="comments">
                            {comments.map((comment) => comment.ratingID == rating.ratingID ?
                                <li className="comment">
                                    {comment.comment}
                                </li>
                                : null
                            )}
                        </ul>
                    </div>
            )}
        
        </section>
    )
}


export default Review


//eventually we will add books, comics, etc, where the pillars will be different, so having each pillar rendered with && means we can eventually put all of the pillars here and only the relevant ones will render.
    //we're now rendering the pillars based on what the rating objects say their pillar is, which is determined at submitReview.jsx when a user submits.  so as long as review submission is dynamic in that regard, this should take care of itself


