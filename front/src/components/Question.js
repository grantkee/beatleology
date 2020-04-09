import React from 'react';
import PropTypes from 'prop-types';

//I only need a functional component here because this will display stateless data

//the component displays the content that is passes to it through props.
function Question ( props ) {
    return (
        <h3 className="question">{props.content}</h3>
    )
}

//while developing the app, I want to ensure the type of data I'm passing is valid. Due to performance issues, I will only use propTypes in development mode.
Question.propTypes = {
    //adding isRequired to the end will return a warning if no prop is provided
    content: PropTypes.string.isRequired
};

export default Question;