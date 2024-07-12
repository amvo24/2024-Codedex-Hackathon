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
        {/* <h1>DRINK LIST BOX</h1> */}
        <div className="drink-list">
          <div className="beverages">
            {/* <h2>Beverages</h2> */}
            <ul>
              {beverages.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </div>
          <div className="prices">
            {/* <h2>Prices</h2> */}
            <ul>
              {beverages.map((item, index) => (
                <li key={index}>{item.price}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };


export default DrinkListBox;
