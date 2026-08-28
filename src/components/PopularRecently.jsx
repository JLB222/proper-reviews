import database from '../databasePlaceholder.json'
import WorkCarousel from './Carousel/WorkCarousel'

function PopularRecently(props) {
    return (
        <section className="popularWorks">
            <h1>Popular Lately</h1>
            <WorkCarousel 
                works = {database}
            />
        </section>
    )
}


export default PopularRecently


//instead of calling the work component, maybe this is just a carousel of images that act as links to the work?  Perhaps the Work.jsx is where the magic happens, including viewing reviews or entering your own?  Or should that be inside a 'ReviewWork.jsx' component?