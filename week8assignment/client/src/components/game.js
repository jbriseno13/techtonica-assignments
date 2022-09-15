import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";

const Game = (props) => {

    const [questions, setQuestions] = useState([]);
    const [answerOptions, setAnswerOptions] = useState([])

    // const [questionScore, setQuestionScore] = usestate([]);

    //correct_answer
    //incorrect_answers

    const loadData = () => {
        fetch('http://localhost:8081/apiquestions')
            .then((response) => response.json())
            .then(data => {
                console.log("This is line 11", data.results);
                setQuestions(data.results);
            })
    }


    

  


    useEffect(() => {
        loadData();
    }, [])

    return (
        <div className="Container">
            <div className='question-count'>
                <span>Question 1</span>/{questions.length}
            </div>
            {questions.map((question, index) => {
                return <QuestionCard key={index} question={question} />
            })}
            <div className='score-section'>You scored 1 out of {questions.length}</div>

        </div>
    )

}

export default Game;