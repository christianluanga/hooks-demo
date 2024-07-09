import { useState, useEffect } from 'react';

export default ()=> {
  const [isOnline, setIsOnline] = useState(true);
  const [firstName, setFirstName] = useState('Mary');
  const [lastName, setLastName] = useState('Poppins');

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleSaveClick = ()=> {
    alert(`Progress saved for ${firstName} ${lastName} ✅`);
  }

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setFirstName(e.target.value);
  }

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    setLastName(e.target.value);
  }
  
  return (
    <div>
    <label style={styles.label}>
      First name:
      <input value={firstName} onChange={handleFirstNameChange} style={styles.input} />
    </label>
    <label style={styles.label}>
      Last name:
      <input value={lastName} onChange={handleLastNameChange} style={styles.input} />
    </label>
    <p style={styles.greeting}>
      Good morning, {firstName} {lastName}.
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