import Header from '../components/Header/Header'
import Work from '../components/Work/Work'
import Review from '../components/Reviews/Review'

import database from '../databasePlaceholder.json'
import { useParams } from "react-router-dom";

function WorkPage(props) {
    const workID = useParams().id
    const workInfo = database.find((el) => el.id === +workID)

    return (
        <div>
            <Header/>
            <Work 
                data = {workInfo}
            />
            <Review />
        </div>

    )
}

export default WorkPage