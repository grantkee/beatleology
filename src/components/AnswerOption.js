import React from 'react';
import PropTypes from 'prop-types';

//this component will be mapped over to generate <li> elements with answer options. I'm using radio buttons for the user to click. The checked property will toggle true/false if the answer option type is equivalent to the answer that the user selects.

function AnswerOption ( props ) {
    return (
        <li className="answer-option">
            <input 
                type="radio"
                className="radio-button"
                name="radio-group"
                checked={props.answerType === props.answer}
                id={props.answerType}
                value={props.answerType}
                disabled={props.answer}
                onChange={props.onAnswerSelected}
            />
            <label className="radio-label" htmlFor={props.answerType}>
                {props.answerContent}
            </label>
        </li>
    );
}

//checking that props are being passed correctly

AnswerOption.propTypes = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;