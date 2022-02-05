import {useState} from "react";
import OneQuestion from "./OneQuestion";

function App() {
  const [questions, setQuestions] = useState([]);
  const start = () => {
    const num1 = Math.floor(Math.random()*10);
    const num2 = Math.floor(Math.random()*10);
    const operations = ['+','-','*'];
    let operation = operations[Math.floor(Math.random()*3)]
    const newQuestions = [...questions, {num1, num2, operation}]
    setQuestions(newQuestions);
  }
  const countRightAnswer= (lastQuestion) => {
    return eval(lastQuestion.num1 + lastQuestion.operation + lastQuestion.num2);
  }
  const setResults = (ind , userAnswer) => {
    const rightAnswer = countRightAnswer(questions[questions.length-1]);
    const newQuestions = questions.map((el, index) => {
      if (ind === index) {
        return {...el, userAnswer, rightAnswer}
      }
      else return el;
    });
    setQuestions(newQuestions);
  }

  console.log(questions)
  const [result, setResult] = useState(null);
  const testAmount = 3;
  const getResult = () => {
    const data = questions.map(el => el.rightAnswer === el.userAnswer ? 1:0);
    let newResult = data.reduce((acc, curr) => acc + curr, 0);
    setResult(newResult);
  }
  const eraseAll = () => {
    setQuestions([]);
    setResult(null);
  }

  return (
    <div>
      <h1>Math Test</h1>
      <button disabled={questions.length} onClick={start}> Start test </button>
      <OneQuestion questions = {questions} start = {start} setResults = {setResults} testAmount = {testAmount}/>
      {(testAmount === questions.length && questions[questions.length-1].userAnswer!==undefined)  && <button onClick={getResult}>Show results</button>}
      {result!==null &&
      <p>
        {result} out of {testAmount}
        <button onClick={eraseAll}>Start again</button>
      </p>}
    </div>
  );
}

export default App;
        //hidden={questions.length < testAmount}