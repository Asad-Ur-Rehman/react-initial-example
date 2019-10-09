import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Button from './Button'
class Steps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stepNumber: 1
        };
    }
    nextStep = (next) => {
        this.setState((state, props) => ({
            stepNumber: state.stepNumber + next
        }));
    }
    render() {
        return (
            <div>
                <Step1 stepNumber={this.state.stepNumber} />
                <Step2 stepNumber={this.state.stepNumber} />
                <Step3 stepNumber={this.state.stepNumber} />
                <Button nextStep={this.nextStep} />
            </div>
        );
    }
}
export default Steps; // Don’t forget to use export default!
