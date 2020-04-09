import React from 'react';
import PropTypes from 'prop-types'

function Results( props ) {
    return (
        <h3 className='result'>
            Your inner Beatle is: {props.quizResults}
        </h3>
    );
}

Results.propTypes = {
    quizResult: PropTypes.string.isRequired
};

export default Results;