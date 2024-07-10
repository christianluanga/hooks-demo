import { useState } from 'react';
import { useOnlineStatus } from './hooks/useOnlineStatus';
import { useFormInput } from './hooks/useFormInput';

const SaveButton = ()=> {
    const isOnline = useOnlineStatus();

    const firstNameProps = useFormInput('Jane')
    const { value: lastName, onChange: onLastNameChange} = useFormInput('Doe')

    const fullName = `${firstNameProps.value} ${lastName}`
    
    const handleSaveClick = ()=> {
      alert(`Progress saved for ${fullName} ✅`);
    }
  
    return (
      <div>
      <label style={styles.label}>
        First name:
        <input {...firstNameProps} style={styles.input} />
      </label>
      <label style={styles.label}>
        Last name:
        <input value={lastName} onChange={onLastNameChange} style={styles.input} />
      </label>
      <p style={styles.greeting}>
        Good day, {fullName}.
      </p>
      <button
        style={isOnline ? styles.button : styles.disabledButton}
        disabled={!isOnline}
        onClick={handleSaveClick}
      >
        {isOnline ? 'Save progress' : 'Reconnecting...'}
      </button>
    </div>
    );
}

const styles = {
    label: {
      display: 'block',
      marginBottom: '8px',
    },
    input: {
      marginLeft: '8px',
      padding: '4px',
    },
    greeting: {
      fontWeight: 'bold',
    },
    button: {
      padding: '8px 16px',
      backgroundColor: 'green',
      color: 'white',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '4px',
    },
    disabledButton: {
      padding: '8px 16px',
      backgroundColor: 'grey',
      color: 'white',
      cursor: 'not-allowed',
      border: 'none',
      borderRadius: '4px',
    },
};

export default SaveButton