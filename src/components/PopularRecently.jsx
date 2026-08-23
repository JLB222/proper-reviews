import Work from './Work'

function PopularRecently(props) {
    const data = props.data
    return (
        <section>
            <h1>Popular Lately</h1>
            <Work
                workData = {data[0]}
            />
            <Work
                workData = {data[1]}
            />
            <Work
                workData = {data[2]}
            />
        </section>
    )
}


export default PopularRecently


//instead of calling the work component, maybe this is just a carousel of images that act as links to the work?  Perhaps the Work.jsx is where the magic happens, including viewing reviews or entering your own?  Or should that be inside a 'ReviewWork.jsx' component?