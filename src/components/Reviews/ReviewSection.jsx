//data will be inherited from a WorkPage component; it will create a generic section and inside is an array map for all the reviews from the database
import './review.css'
import { useState, useEffect } from 'react'
import reviewsDatabase from '../../reviewsDBPlaceholder.json'
import Review from './Review'


function ReviewSection(props) {
    const [reviews, setReviews] = useState(null)


    async function getWorkReviews() {
        console.log("getWorkReviews is running")
        const url = `http://127.0.0.1:5700/api/getWorkReviews/${props.data.id}`;
        try {
            console.log("about to fetch", `Work id: ${props.data.id}`)
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            } else {console.log ("fetch complete")}

            const result = await response.json();
            console.log("Reviews found:", result);

            return result
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        async function fetchReviews() {
            const result = await getWorkReviews()
            setReviews(result)
        }
    
        fetchReviews()
    }, [])


    // const user = userDatabase // need to add users here to match review with user name
    const userReviews = reviewsDatabase.filter(el => el.workID === props.data.id) //find all reviews in the review database with a userID that matches the workID of what's currently being viewed (Spiderman, Superman, etc)
    return (
        <section className="centering-container review-container">
            <p className="review-count">Number of Reviews: {reviews?.length || 0}</p>
            {reviews?.map((el, i, _) => 
                <Review key={i} data={el} userName="{user}"/>
            )}
        </section>
    )
}

export default ReviewSection

//can we make a dynamic number of pillars based on the medium?  you bet your ass we can