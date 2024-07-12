// ./components/home
import React from 'react';
import DrinkListBox from './DrinkListBox';
import * as THREE from 'three';
// import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import coffee from '../assets/images/coffee.png'
import boba from '../assets/images/boba.png'
import matcha from '../assets/images/matcha.png'
import '../CSS/Menu.css'

const Menu = () => {
    return (
        <div className='menu-page'>
            {/* First Row */}
            <div className='row'>
                <div className='image-box20'>
                    {/* Replace with your image component */}
                    <img src={coffee} className='image20' />
                </div>
                <DrinkListBox />
            </div>

            {/* Second Row (reversed) */}
            <div className='row reversed'>
                <div className='image-box'>
                    {/* Replace with your image component */}
                    <img src={boba} alt='Image 2' className='image20'/>
                </div>
                <DrinkListBox />
            </div>

            {/* Third Row */}
            <div className='row'>
                <div className='image-box'>
                    {/* Replace with your image component */}
                    <img src={matcha} alt='Image 3' className='image20'/>
                </div>
                <DrinkListBox />
            </div>
        </div>
    );
};

export default Menu;
