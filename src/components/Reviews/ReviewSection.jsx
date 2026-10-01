import './review.css'
import { useState, useEffect } from 'react'
import Review from './Review'


function ReviewSection(props) {
    const [ratings, setRatings] = useState(null)


    async function getWorkRatings() {
        console.log("getWorkRatings is running")
        const url = `/api/getWorkRatings/${props.data}`;
        try {
            console.log("about to fetch", `Work id: ${props.data}`)
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            } else {console.log ("fetch complete")}

            const result = await response.json();
            console.log("Ratings found:", result);

            setRatings( result )
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getWorkRatings()
    }, [])


    // const user = userDatabase // need to add users here to match review with user name
    return (
        <section className="centering-container review-container">
            <p className="review-count">Number of Reviews: {ratings?.length || 0}</p>
            {ratings?.map((el, i, _) => 
                <Review key={i} data={el} userName="{user}"/>
            )}
        </section>
    )
}

export default ReviewSection

//can we make a dynamic number of pillars based on the medium?  you bet your ass we can; see Review.jsx