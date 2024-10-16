import React from 'react';

const JobsLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <div>
            <p>JobsLayout</p>
            {children}
        </div>
    );
};

export default JobsLayout;
