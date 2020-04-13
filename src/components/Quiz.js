import React from 'react';
import PropTypes from 'prop-types';
import Question from '../components/Question';
import QuestionCounter from '../components/QuestionCounter';
import AnswerOption from '../components/AnswerOption';

//this component will contain other smaller components.  
function Quiz ( props ) {
    //this function will be used to map over properties, rendering an AnswerOption component for each answer that's defined in the state
    function renderAnswerOptions ( key ) {
        return (
            <AnswerOption
              key={key.content}
              answerContent={key.content}
              answerType={key.type}
              answer={props.answer}
              questionId={props.questionId}
              onAnswerSelected={props.onAnswerSelected}
            />
        )
    }
    //I want the QuestionCounter component to display which question the user is on every time a new question is rendered on the DOM. Beneath that, I want to display the question that's being asked. It will need a <ul> component because it will also contain the answers the user selects from.
    return(
        <div className="quiz">
            <QuestionCounter
              counter={props.questionId}
              total={props.questionTotal}
            />
            <Question content={props.question} />
            <ul className="answer-options">
              {props.answerOptions.map(renderAnswerOptions)}
            </ul>
        </div>
    );
}

//checking property types
Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  counter: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;