import Pillar from "./Pillar"
import { useState } from "react"

const initialReviewState = {  //this needs to be more dynamic; generate it with the determinePillar function to ensure the fields match the medium.  It works fine now when we only have movies.
    Writing: {
        score: 5,
        comments: []
    },
    Visuals: {
        score: 5,
        comments: []
    },
    Sound: {
        score: 5,
        comments: []
    },
    Performance: {
        score: 5,
        comments: []
    }
}

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

    const [review, setReview] = useState(initialReviewState)
    console.log(review)

    function changePillarScore(pillar, score) {
        const numberOfComments = Math.abs(score - 5);

        setReview(prev => {
            const comments = [...prev[pillar].comments];

            while (comments.length < numberOfComments) {  //this adds additional blank strings to the comment array if the user goes from lower score to higher
                comments.push("");
            }

            comments.length = numberOfComments;  //this cuts the array short if the user goes from a higher score to lower

            return {
                ...prev,
                [pillar]: {
                    score: score,
                    comments: comments
                }
            };
        });
        console.log(review)  //this will actually only log what the state currently is.  Even though the setState function is immediately before, state doesn't update when setState runs; setState schedules a change which happens on re-render.  with this console log here, you'll see in the console 2 review objects; the first is the current state, the 2nd is the new one
    }
    function changePillarComment(pillar, index, userInput) {
        setReview(prev => ({
            ...prev,  //takes all data from the previous state (which is an object)
            [pillar]: {
                score: prev[pillar].score,
                comments: prev[pillar].comments.map((el,i) => index === i ? userInput : el)
            }
        }))
        console.log(review)
    }

    async function submitReview(e) {
        e.preventDefault()  //stops default behavior of the form, reloading the page in particular
        console.log('Function: submitReview is working')

        try {
            
            const reviewInfo = {
                ...review,
                //id - possibly generated on server
                //userID - once we have user login
                workID: work.id
            };
            console.log(`About to fetch; sending review info`)
            const response = await fetch("/api/submitReview", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(reviewInfo)
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
                {determinePillar().map((el,i) => 
                    <Pillar 
                        key={i} 
                        pillarType = {el} 
                        score={review[el].score} 
                        changeScore={changePillarScore}
                        changeComment={changePillarComment}
                    />
                )}
                <button type="submit">Submit Review</button>
            </form>
        </section>
    )
}

export default SubmitReview


//trying to get review data here in SubmitReview.  passed Pillar a new function that allows the score to update here, but now the inputs don't appear in Pillar when the score changes.  
    // FIX:  the pillar component was using the wrong syntax to pass the score correctly.  changed from `score={review[el.score]}` to `score={review[el].score}`

//this will eventually need to pass user data to it, because only logged in users will be able to submit reviews
//this updates state and re-renders with every keypress.  Is there a better way to do it?
//STRETCH:  need to dynamically generate the initial state, since different mediums will have different pillars
//submit button should only be pressable once to avoid taxing the server
//form should immediately clear (and possibly close the component)
//feedback that their review has been recieved 
//server needs to check for duplicates.  perhaps by only allowing 1 review per work from each user

// Next!
//fetch needs to send not just the review information, but id, userID and workID
    //we might generate the id server-side, but we def need user and work ids
