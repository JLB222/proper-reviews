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


//instead of calling the work component, maybe this is just a carousel of images that act as links to the work?  Perhaps the Work.jsx is where the magic happens, including viewing reviews or entering your own?  Or should that be inside a 'ReviewWork.jsx' component?