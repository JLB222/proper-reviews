//data will be inherited from a WorkPage component; it will create a generic section and inside is an array map for all the reviews from the database
import './review.css'
import reviewsDatabase from '../../reviewsDBPlaceholder.json'
import Review from './Review'

function ReviewSection(props) {

    // const user = userDatabase // need to add users here to match review with user name
    const userReviews = reviewsDatabase.filter(el => el.workID === props.data.id) //find all reviews in the review database with a userID that matches the workID of what's currently being viewed (Spiderman, Superman, etc)
    return (
        <section className="centering-container review-container">
            <p className="review-count">Number of Reviews: {userReviews.length}</p>
            {userReviews.map((el, i, _) => 
                <Review key={i} data={el} userName="{user}"/>
            )}
        </section>
    )
}

export default ReviewSection

//can we make a dynamic number of pillars based on the medium?  you bet your ass we can