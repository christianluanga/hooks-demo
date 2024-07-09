import { useState, useEffect } from 'react';

const SaveButton = ()=> {
  const [isOnline, setIsOnline] = useState(true);

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
    alert(`Progress saved ✅`);
  }
  
  return (
    <div>
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