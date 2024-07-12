// ./components/Slide_3
import React from 'react';
import '../CSS/Slide_3.css'
import snp_local from '../assets/images/snp_local.jpeg'

const Slide_3 = () => {
    return(
        // contains both image and text divs
        <div className="slide-container">
            <div className="image-content"> {/* FIX ME: TURN CLASS TO ID.*/}
                <img src={snp_local} alt='Wall Art' width='664px' height='696px'></img>
            </div>
            <div className="text-content">
                
            </div>
        </div>
    );
};

export default Slide_3;