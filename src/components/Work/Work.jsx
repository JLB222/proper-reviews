import './work.css'
import { useState, useEffect } from 'react'

function Work(props) {
    
    const [work, setWork] = useState([])
        console.log(`The workID from useParams() is: ${props.data}`)

    async function getWorkData() {
        console.log(`getWorkData is running`)
        const url = `http://127.0.0.1:5700/api/getSpecificWork/${props.data}`
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
        </section>
    )
}


export default Work

// title 
// medium 
// release date 
// image 
// reviews