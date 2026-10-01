import { useState } from "react"

function Pillar(props) {
    const {pillarType, score, changeScore, changeComment} = props

    function createInputs(num) {
        let numOfInputs = Math.abs(num - 5)
        return (
            <>
                {Array.from({length: numOfInputs}, (_,index) => (
                    <input 
                        key={index} 
                        type="text"
                        placeholder={`You think the ${pillarType} deserves a(n) ${score}?  Why?`}
                        size="160"
                        maxLength="200"
                        name={pillarType + index}
                        onChange={(e) => changeComment(pillarType, index, e.target.value)}
                    />
                ))}
            </>
        )
    }


    return (
        <>
            <fieldset>
                <legend>{pillarType}</legend>

                <label>
                    <input type="radio" name={`${pillarType} score`} value="0" onChange={() => changeScore(pillarType, 0)}/>
                    0
                </label>

                <label>
                    <input type="radio" name={`${pillarType} score`} value="1" onChange={() => changeScore(pillarType, 1)} />
                    1
                </label>

                <label>
                    <input type="radio" name={`${pillarType} score`} value="2" onChange={() => changeScore(pillarType, 2)} />
                    2
                </label>

                <label>
                    <input type="radio" name={`${pillarType} score`} value="3" onChange={() => changeScore(pillarType, 3)} />
                    3
                </label>

                <label>
                    <input type="radio" name={`${pillarType} score`} value="4" onChange={() => changeScore(pillarType, 4)} />
                    4
                </label>

                <label>
                    <input type="radio" name={`${pillarType} score`} value="5" defaultChecked  onChange={() => changeScore(pillarType, 5)}/>
                    5
                </label>

                <label>
                    <input type="radio" name={`${pillarType} score`} value="6"  onChange={() => changeScore(pillarType, 6)}/>
                    6
                </label>

                <label>
                    <input type="radio" name={`${pillarType} score`} value="7"  onChange={() => changeScore(pillarType, 7)}/>
                    7
                </label>

                <label>
                    <input type="radio" name={`${pillarType} score`} value="8"  onChange={() => changeScore(pillarType, 8)}/>
                    8
                </label>

                <label>
                    <input type="radio" name={`${pillarType} score`} value="9"  onChange={() => changeScore(pillarType, 9)}/>
                    9
                </label>

                <label>
                    <input type="radio" name={`${pillarType} score`} value="10"  onChange={() => changeScore(pillarType, 10)}/>
                    10
                </label>
            </fieldset>
            {createInputs(score)}
        </>
    )
}

export default Pillar


//next step?  use onChange to render extra inputs based on radio button choice?

//decide the size and character limit
//CSS to make it look better
//state to preserve the comments until the user presses submit
//submit button
//server-side functionality
