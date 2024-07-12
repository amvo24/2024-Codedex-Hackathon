// ./components/Slide_2
import React from 'react';
import '../CSS/Slide_2.css'
import monopoly_guy from '../assets/images/monopoly_guy.png'

const Slide_2 = () => {
    return(
        // contains both image and text divs
        <div className="slide-container">
            <div className="image-content">
                <img src={monopoly_guy} alt='Wall Art' width='664px' height='696px'></img>
            </div>
            <div className="text-content">
                
            </div>
        </div>
    );
};

export default Slide_2;