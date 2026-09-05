// import database from '../../databasePlaceholder.json'
import { Link } from "react-router-dom"
import './workCarousel.css'
import { useState, useEffect } from "react";

function PopularRecently(props) {
    const [popularWorks, setPopularWorks] = useState([])
    
    async function getData() {
        console.log("getData is running")
        const url = "http://127.0.0.1:5700/api/getPopularWorks";
        try {
            console.log("about to fetch")
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            } else {console.log ("fetch complete")}

            const result = await response.json();
            console.log("Works found:", result);

            return result
        } catch (error) {
            console.error(error.message);
        }
    }

   useEffect(() => {
    async function fetchPopularWorks() {
        const result = await getData()
        setPopularWorks(result)
    }

    fetchPopularWorks()
}, [])


    return (
        <section className="popularWorks centering-container">
            <h1>Popular Lately</h1>
            <div className="work-carousel">
                {popularWorks.map(el => 
                    <div className="work-slide" key={el.id}>
                        <Link to={`/work/${el.id}`}>
                            <img 
                                src={`images/${el.image}`} 
                                alt={`book cover or movie poster for ${el.title}`}
                            />
                        </Link>

                    </div>
                )}
            </div>
        </section>
    )
}


export default PopularRecently