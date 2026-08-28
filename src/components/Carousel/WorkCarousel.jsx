import Work from '../Work.jsx'
import './workCarousel.css'

function WorkCarousel(props) {
    const {works} = props

    return (
        <div className="work-carousel">
            {works.map(el => 
                <div className="work-slide" key={el.id}>
                    <img 
                        src={`images/${el.image}`} 
                        alt={`book cover or movie poster for ${el.title}`}
                    />
                </div>
            )}
        </div>
    )
}


export default WorkCarousel