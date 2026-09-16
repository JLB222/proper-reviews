import Header from '../components/Header/Header'
import Work from '../components/Work/Work'
import ReviewSection from '../components/Reviews/ReviewSection'

import { useParams } from "react-router-dom";


function WorkPage(props) {
    const workID = useParams().id


    return (
        <div>
            <Header/>
            <Work 
                data = {workID}
            />
            <ReviewSection
                data = {workID}
            />
        </div>

    )
}

export default WorkPage