import React, { useState } from 'react';

function AgeCalculator() {
  const [birthday, setBirthday] = useState('');
  const [age, setAge] = useState(null);

  const HandleAgeCalculator = () => {
    const birth = new Date(birthday);
    const today = new Date();
    let calculatedAge = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      calculatedAge--;
    }
    setAge(calculatedAge);
    setBirthday('')
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>🎂 Age Calculator</h1>

        <input
          type='date'
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          style={styles.input}
        />

        <button onClick={HandleAgeCalculator} style={styles.button}>
          Calculate Age
        </button>

        {age !== null && (
          <p style={styles.result}>Your age is <strong>{age}</strong> years.</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f1f5f9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
    width: '300px',
  },
  heading: {
    marginBottom: '1.5rem',
    fontSize: '1.5rem',
    color: '#1f2937',
  },
  input: {
    padding: '0.5rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    width: '100%',
    marginBottom: '1rem',
  },
  button: {
    padding: '0.6rem 1rem',
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    width: '100%',
    marginBottom: '1rem',
  },
  result: {
    fontSize: '1.2rem',
    color: '#111827',
  },
};

export default AgeCalculator;
