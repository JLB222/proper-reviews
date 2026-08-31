function Pillar(props) {
    const {pillarType} = props
    return (
        <fieldset>
            <legend>{pillarType}</legend>

            <label>
                <input type="radio" name={`${pillarType} score`} value="0" />
                0
            </label>

            <label>
                <input type="radio" name={`${pillarType} score`} value="1" />
                1
            </label>

            <label>
                <input type="radio" name={`${pillarType} score`} value="2" />
                2
            </label>

            <label>
                <input type="radio" name={`${pillarType} score`} value="3" />
                3
            </label>

            <label>
                <input type="radio" name={`${pillarType} score`} value="4" />
                4
            </label>

            <label>
                <input type="radio" name={`${pillarType} score`} value="5" defaultChecked />
                5
            </label>

            <label>
                <input type="radio" name={`${pillarType} score`} value="6" />
                6
            </label>

            <label>
                <input type="radio" name={`${pillarType} score`} value="7" />
                7
            </label>

            <label>
                <input type="radio" name={`${pillarType} score`} value="8" />
                8
            </label>

            <label>
                <input type="radio" name={`${pillarType} score`} value="9" />
                9
            </label>

            <label>
                <input type="radio" name={`${pillarType} score`} value="10" />
                10
            </label>
        </fieldset>
    )
}

export default Pillar