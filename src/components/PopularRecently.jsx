import Work from './Work'

function PopularRecently(props) {
    const data = props.data
    return (
        <section className="popularWorks">
            <h1>Popular Lately</h1>
            <img src={`images/${data[0].image}`} alt={`book cover or movie poster for ${data[0].title}`} />
            <img src={`images/${data[1].image}`} alt={`book cover or movie poster for ${data[1].title}`} />
            <img src={`images/${data[2].image}`} alt={`book cover or movie poster for ${data[2].title}`} />
        </section>
    )
}


export default PopularRecently


//instead of calling the work component, maybe this is just a carousel of images that act as links to the work?  Perhaps the Work.jsx is where the magic happens, including viewing reviews or entering your own?  Or should that be inside a 'ReviewWork.jsx' component?