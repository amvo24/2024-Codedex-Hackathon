// ./components/OurStory
import React from 'react';
import '../CSS/Slide_1.css';
import snp_guy from '../assets/images/snp_guy.png';

const Slide_1 = () => {
    return(
        // contains both image and text divs
        <div className="slide-container">
            <div className="image-content">
                <img src={snp_guy} alt='Owner of Sip N Play' className='slide-image'></img>
            </div>
            <div className="text-content">
                <div className='smaller-text-content'>
                    <div className='slide-title'>
                        OUR STORY
                    </div>
                    <hr className='seperator'/>
                    <p className='slide-paragraph'>
                    Founder, Jonathan Li, shares a passion for board games, boba,
                    and delicious food, so he combined them all to become Sip &
                    Play, Park Slope&apos’s first board game cafe.
                    It is a straightforward concept, come in with your friends
                    and family to play any board game from our library of 300+
                    games! We hope when you visit, you also enjoy our coffee,
                    espresso, boba, sandwiches, and snacks!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Slide_1;
