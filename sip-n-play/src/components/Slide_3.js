// ./components/Slide_3
import React from 'react';
import '../CSS/Slide_3.css'
import snp_local from '../assets/images/snp_local.jpeg'

const Slide_3 = () => {
    return(
        // contains both image and text divs
        <div className="slide-container">
            <div className="image-content">
                <img src={snp_local} alt='Owner of Sip N Play' className='slide-image'></img>
            </div>
            <div className="text-content">
                <div className='smaller-text-content'>
                    <div className='slide-title'>
                        OUR STORY
                    </div>
                    <hr className='seperator'/>
                    <div className='slide-paragraph-container'>
                        <div className='slide-paragraph-container-hours'>
                            <p className='slide-paragraph'>New opening hours:</p>
                            <p className='slide-paragraph'>Sunday: 10am-11pm</p>
                            <p className='slide-paragraph'>Mon-Thurs: 11am-11pm</p>
                            <p className='slide-paragraph'>Fri: 11am-midnight</p>
                            <p className='slide-paragraph'>Sat: 10am-midnight</p>
                        </div>
                        <p className='slide-paragraph'>Our kitchen closes 2.5-3 hours before we close!</p>
                        <p className='slide-paragraph'>471 5th Ave.</p>
                        <p className='slide-paragraph'>Brooklyn, NY 11215</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide_3;
