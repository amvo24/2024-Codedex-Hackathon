// ./components/home
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/DrinkListBox.css'


const DrinkListBox = ({ }) => {
    const [beverages, setBeverages] = useState([]);

    useEffect(() => {
        const fetchBeverages = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/menu-items/');
                setBeverages(response.data);
            } catch (error) {
                console.error('Error fetching beverages:', error);
            }
        };
        fetchBeverages();
    }, []);

    return (
      <div className="drink-list-box">
        <div className="drink-list">
          <div className="beverages">
            <ul className='menu-ul'>
              {beverages.map((item, index) => (
                <li key={index} className='Menu-font'>{item.name}</li>
              ))}
            </ul>
          </div>
          <div className="prices">
            <ul>
              {beverages.map((item, index) => (
                <li key={index} className='menu-prices'>${item.price}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };


export default DrinkListBox;
