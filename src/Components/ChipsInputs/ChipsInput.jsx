import React, { useState } from 'react';
import './ChipsInput.css';

function ChipsInput() {
  const [inputText, setInputText] = useState('');
  const [chips, setChips] = useState([]);

  const handleAddChips = (e) => {
    if (e) e.preventDefault();
    const trimmed = inputText.trim();
    if (trimmed !== '') {
      setChips((prev) => [...prev, trimmed]);
      setInputText('');
    }
  };

  const handleDeleteChip = (indexToRemove) => {
    const newChips = chips.filter((_, index) => index !== indexToRemove);
    setChips(newChips);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddChips();
    }
  };

  return (
    <div>
      <h1>Chips Inputs</h1>
      <div className="MainContainer">
        <input
          type="text"
          value={inputText}
          placeholder="Enter your chip..."
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="chip-input"
        />
        <button onClick={handleAddChips} className="chip-button">
          Add
        </button>
      </div>
      <div className="chip-container">
        {chips.map((chip, index) => (
          <div className="chip" key={index}>
            <span className="chip-text">{chip}</span>
            <button
              className="chip-delete"
              onClick={() => handleDeleteChip(index)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;
