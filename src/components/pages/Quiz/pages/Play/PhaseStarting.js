import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import CountdownAnimation from '../../../../common/CountdownAnimation';

class PhaseStarting extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        if (this.props.game.quiz.remoteMode) {
            return (
                <div style={{marginTop: 100}}>
                    <div className="quiz-top-section">
                        <Typography variant="h5">Starting quiz</Typography>
                    </div>
                    <div className='quiz-middle-section'>
                        <CountdownAnimation speed="slow" />
                    </div>
                    <div className="quiz-bottom-section">
                    </div>
                </div>
            );
        } else {
            return (
                <div style={{marginTop: 100}}>
                    <div className="quiz-top-section">
                    </div>
                    <div className='quiz-middle-section'>
                        <Typography variant="h5">Starting quiz...</Typography>
                    </div>
                    <div className="quiz-bottom-section">
                    </div>
                </div>
            );
        }
    }
}

export default PhaseStarting;