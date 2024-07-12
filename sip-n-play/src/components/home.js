// ./components/home

import React from 'react';
import Slide_1 from './Slide_1';
import Slide_2 from './Slide_2';
import Slide_3 from './Slide_3';

const HomePage = () => {
    return (
        <div>
            <header>
                <h1>Test</h1>
            </header>
            <Slide_1 />
            <Slide_2 />
            <Slide_3 />
        </div>
    );
};

export default HomePage;
