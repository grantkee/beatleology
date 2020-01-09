import React from 'react';
import PropTypes from 'prop-types'

function Results( props ) {
    return (
        <div className='result'>
            Your inner Beatle is: {props.quizResults}
        </div>
    );
}

Results.propTypes = {
    quizResult: PropTypes.string.isRequired
};

export default Results;