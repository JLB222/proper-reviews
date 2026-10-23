import './review.css'
import { useState, useEffect } from 'react'
import Review from './Review'


function ReviewSection(props) {
    const [reviewData, setReviewData] = useState([])  //reviewData is a bucket with two buckets, one for every comment and one for every rating about the given work; we've gotta sift through it to build the reviews


    async function getWorkRatings() {
        // console.log("getWorkRatings is running")
        const url = `/api/getWorkRatings/${props.data}`;
        try {
                // console.log("about to fetch;", `Work id: ${props.data}`)
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            } else {console.log ("fetch complete")}

            const result = await response.json();
                // console.log("Review data found:", result);

            setReviewData( result.flat() )
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getWorkRatings()
    }, [])

    console.log("reviewData:", reviewData)
    let usersWhoReviewed = new Set(reviewData.map(el => el.userID))
    let reviewerArray = Array.from(usersWhoReviewed)
    let reviewArray = reviewerArray.map((reviewerID) => ({
        user: reviewerID,
        comments: reviewData.filter(commentOrRating => commentOrRating.userID == reviewerID && commentOrRating.comment),  //this'll error if the string is empty because empty strings are falsy in JS
        ratings: reviewData.filter(commentOrRating => commentOrRating.userID == reviewerID && commentOrRating.pillar)  //this'll only match with ratings objects
    }))
    console.log("users who reviewed:", usersWhoReviewed)
    console.log("array of unique reviewers:", reviewerArray)
    console.log("review data combined:", reviewArray)

    return (
        <section className="centering-container review-container">
            <p className="review-count">Number of Reviews: {reviewerArray?.length || 0}</p>
            {reviewArray.map((review, i) => 
                <Review 
                    key={i} 
                    data={review} 
                    userName="{user}"/>
            )}
        </section>
    )
}

export default ReviewSection

//the passing of 'data' doesn't seem to be sending anything; syntax check
    //fixed.  i forgot that the reviewData state was an array of arrays (the server sends it that way) and review.jsx had the wrong syntax to utilize that structure

//NEXT: we seem to be correctly retrieving work data from server, but since all ratings and all comments have the same ratingID of 0, every comment appears in every pillar.  need to go to server.js and fix that
    //fixed

//problem: the review won't have the user's userName, only their ID.  we'd have to make another fetch (or amend the existing one) to get the user names on reviews