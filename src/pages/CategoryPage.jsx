import PopularRecently from "../components/Carousel/PopularRecently"
import Header from "../components/Header/Header"

function CategoryPage(props) {
    return (
        <>
            <Header/>
            <PopularRecently
              medium = "movie"  //this might be needed later when we re-use the PopularWorks component for Movies, Books, Comics, etc.  We'll need to tell the server which works to retrieve
            />
        </>
    )
}

export default CategoryPage