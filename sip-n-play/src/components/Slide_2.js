// ./components/Slide_2
import React from 'react';
import monopoly_man from '../assets/images/monopoly_man.png'

const Slide_2 = () => (
    // contains both image and text divs
    <div className="slide-container">
        <div className="image-content">
            <img src={monopoly_man} className='slide-image'></img>
        </div>
        <div className="text-content">
            <div className='smaller-text-content'>
                <div className='slide-title'>
                    HOW IT WORKS
                </div>
                <hr className='seperator' />
                <p className='slide-paragraph'>
                    Come on in with your friends and family and play boardgames from our collection of over 500+ games!
                    Just $10 a person for 3 hours of gameplay. ($12 a person Friday-Sunday and Holidays)
                    Play while enjoying bubble tea, coffee, beer sandwiches or salads and have a great time!
                    If you want to guarantee a table, you can make a reservation which is $15 a person for 3 hours of gameplay.
                </p>
                <p className='slide-paragraph'>
                    For large parties (9+ or more people), please email by clicking <a href='mailto:sipnplaynyc@gmail.com'>HERE</a> to inquire about a reservation.
                </p>
            </div>
        </div>
    </div>
);


export default Slide_2;
