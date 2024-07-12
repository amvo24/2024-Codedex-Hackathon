// ./components/home
import React from 'react';
import DrinkListBox from './DrinkListBox';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


const Menu = () => {
    return (
        <div className='menu-page'>
            {/* First Row */}
            <div className='row'>
                <div className='image-box'>
                    {/* Replace with your image component */}
                    <img src='/path/to/your/image1.jpg' alt='Image 1' />
                </div>
                <DrinkListBox />
            </div>

            {/* Second Row (reversed) */}
            <div className='row reversed'>
                <DrinkListBox />
                <div className='image-box'>
                    {/* Replace with your image component */}
                    <img src='/path/to/your/image2.jpg' alt='Image 2' />
                </div>
            </div>

            {/* Third Row */}
            <div className='row'>
                <div className='image-box'>
                    {/* Replace with your image component */}
                    <img src='/path/to/your/image3.jpg' alt='Image 3' />
                </div>
                <DrinkListBox />
            </div>
        </div>
    );
};

export default Menu;
