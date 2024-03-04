import React, { useState } from 'react';

function Ruf() {
  const [radioButtons, setRadioButtons] = useState([]);

  const handleButtonClick = () => {
    setRadioButtons([...radioButtons, { index: radioButtons.length, isSelected: true }]);
  };

  const handleRadioChange = (index) => {
    setRadioButtons(
      radioButtons.map((radioButton, i) => (i === index ? { ...radioButton, isSelected: true } : radioButton))
    );
  };

  return (
    <>  
      <div>
      {radioButtons.map((radioButton) => (
        <label key={radioButton.index}>
          <input
            type="radio"
            name="radio-group"
            checked={radioButton.isSelected}
            onChange={() => handleRadioChange(radioButton.index)}
          />
          Section {radioButton.index + 1}
        </label>
      ))},<br/>
      <button onClick={handleButtonClick}>Add Radio Button</button>
    </div>
    </>

  );

}

export default Ruf;