
function SubmitReview(props) {


    return (
        <section className="centering-container review-section">
            {determinePillar().map((el) => <Pillar pillarType = {el}/>)}
        </section>
    )
}

export default SubmitReview