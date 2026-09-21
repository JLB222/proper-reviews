import './work.css'
import { useState, useEffect } from 'react'
import SubmitReview from '../Reviews/SubmitReview'

function Work(props) {
    
    const [work, setWork] = useState([])
        console.log(`The workID from useParams() is: ${props.data}`)
    const [isWritingReview, setIsWritingReview] = useState(false)
    
    function reviewToggle() {
        setIsWritingReview(prev => !prev)
    }

    async function getWorkData() {
        console.log(`getWorkData is running`)
        const url = `/api/getSpecificWork/${props.data}`
        try {
            console.log("about to fetch", `Work id: ${props.data}`)
            const response = await fetch(url)
            if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
            } else {console.log ("fetch complete")}

            const result = await response.json();
            console.log("Work found:", result);

            setWork( result )
            console.log(`The current state of work is: ${work}`)
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getWorkData()
    }, [])

    return (
        <section className="centering-container work-section">
            <img src={`../images/${work.image}`} alt={`book cover or movie poster for ${work.title}`} />
            <p>Release Date: {work.releaseDate}</p>
            <p>{work.summary || "No Summary Found"}</p>
            <button onClick={() => reviewToggle()}>{isWritingReview?"Cancel":"Write"} Proper Review</button>
            {isWritingReview && <SubmitReview work={work}/>}
        </section>
    )
}


export default Work

// title 
// medium 
// release date 
// image 
// reviews