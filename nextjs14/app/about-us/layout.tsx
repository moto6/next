import React from 'react';

const AboutUsLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <div>
            {children}
            &copy; <a href="https://nextjs.org">NEXT.js</a> sample application built in
        </div>
    );
};

export default AboutUsLayout;
