import { useState } from 'react'
import Pillar from './Pillar'
//data will be inherited from a WorkPage component; it will create a generic section and inside is an array map for all the reviews from the database
import './review.css'
import reviewsDatabase from '../../reviewsDBPlaceholder.json'

function Review(props) {
    const {workMedium} = props.data.medium  //movie, book, tvshow, game, etc
    const moviePillars = ["Writing", "Visuals", "Sound", "Performance"]
    const tvPillars = ["Writing", "Visuals", "Sound", "Performance"]
    const bookPillars = ["Writing"]

    // function determinePillar(str = workMedium) {
    //     switch (str) {
    //         case 'movie': return moviePillars
    //         case 'tv'   : return tvPillars
    //         case 'book' : return bookPillars
    //     }
    // }

    const userReviews = reviewsDatabase.filter(el => el.workID === props.data.id) //find all reviews in the review database with a userID that matches the workID of what's currently being viewed (Spiderman, Superman, etc)
    return (
        <section className="centering-container review-section">
            {userReviews.map((el, i, _) => 
                <section key={i}>
                    {el.pillarWritingScore && <span>Writing: {el.pillarWritingScore}</span>}
                    {el.pillarVisualsScore && <span>Visuals: {el.pillarVisualsScore}</span>}
                    {el.pillarSoundScore && <span>Sound: {el.pillarSoundScore}</span>}
                    {el.pillarPerformanceScore && <span>Performance: {el.pillarPerformanceScore}</span>}
                </section>
            )}
            {/* {determinePillar().map((el) => <Pillar pillarType = {el}/>)} */}
        </section>
    )
}

export default Review

//can we make a dynamic number of pillars based on the medium?  you bet your ass we can