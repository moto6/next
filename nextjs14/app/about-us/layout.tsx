import React from 'react';

const AboutUsLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <div>
            {children}
            &copy; Next JS is great!
        </div>
    );
};

export default AboutUsLayout;
