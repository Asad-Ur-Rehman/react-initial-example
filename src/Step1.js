import React from 'react';

const Step1 = ({ stepNumber }) => {
    if (stepNumber === 1) {
        return (
            <div>
                <span>Step 1</span>
                <input type="number"></input>
            </div>
        );
    }
    return null;
};

export default Step1;