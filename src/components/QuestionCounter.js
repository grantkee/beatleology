import React from 'react';
import PropTypes from 'prop-types';

//this component does not use state. It will simply display the value of counter that's passed through props as well as the total for the user to keep track of which question they're on
function QuestionCounter ( props ) {
    return (
        <div className="question-counter">
            Question <span>{props.counter}</span> of <span>{props.total}</span>
        </div>
    );
}

//both values should be numbers and are required

QuestionCounter.propTypes = {
    counter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
};

export default QuestionCounter;