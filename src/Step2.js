import React from 'react';

const Step2 = ({ stepNumber }) => {
    if (stepNumber === 2) {
        return (
            <div>
                <span>Step 2</span>
                <input type="number"></input>
            </div>
        );
    }
    return null;
};

export default Step2;