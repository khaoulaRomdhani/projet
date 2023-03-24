
import React, { useState } from "react";
import './style.css';
/*import {getStylesFromString} from './pages/FonctionStyle.js';*/
export default function Ingredients() {
    //javascript
    const MyComponent = () => {
        const [selectedIngredients, setSelectedIngredients] = useState([]);
        const [isChecked, setIsChecked] = useState(false);
      
        const handleItemClick = (item) => {
          if (!isChecked) {
            setIsChecked(true);
            setSelectedIngredients([...selectedIngredients, item]);
          } else {
            setIsChecked(false);
            setSelectedIngredients(
              selectedIngredients.filter((i) => i !== item)
            );
          }
        };
      
        const handleClearClick = () => {
          setSelectedIngredients([]);
          setIsChecked(false);
        };
    return (
        
        <div className="big_cont">
        <div className="selected_bar">
          {selectedIngredients.length === 0 ? (
            <span>You don't have any selected ingredients.</span>
          ) : (
            selectedIngredients.map((item, index) => (
              <label key={index} className="nn">
                <input
                  className="form-check-input mt-0"
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleItemClick(item)}
                />
                {item}
              </label>
            ))
          )}
        </div>
        <button className="clear" onClick={handleClearClick}>
          Clear
        </button>
      </div>
    );
  };



    
}