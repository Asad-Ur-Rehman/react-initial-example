import React from 'react';

const Step3 = ({ stepNumber }) => {
    if (stepNumber === 3) {
        return (
            <div>
                <span>Step 3</span>
                <input type="number"></input>
            </div>
        );
    }
    return null;
};

export default Step3;