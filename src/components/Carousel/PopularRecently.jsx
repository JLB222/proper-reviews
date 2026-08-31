import database from '../../databasePlaceholder.json'
import { Link } from "react-router-dom"
import './workCarousel.css'


function PopularRecently(props) {
    return (
        <section className="popularWorks centering-container">
            <h1>Popular Lately</h1>
            {/* <WorkCarousel 
                works = {database}
            /> */}
            <div className="work-carousel">
                {database.map(el => 
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