import {useState} from "react";

export default function OneQuestion(props){
    const [userAnswer, setUserAnswer] = useState('');
    return (<div>
        {props.questions.map((el, index) =>
            <div key={index}> {index+1}) {el.num1} {el.operation} {el.num2} = {el.userAnswer}
                {el.userAnswer===undefined &&
                <>
                    <input type="number" value={el.userAnswer} onChange={(event) => setUserAnswer(Number(event.target.value))}/>
                    <button onClick={() => props.setResults(index, userAnswer)}>Ok</button>
                </>
                }
                <button hidden={props.questions.length > props.testAmount-1} disabled={el.userAnswer===undefined} onClick={props.start} > Next </button>

        </div>)}
    </div>)
}