import { Button, ThemeProvider, Alert } from '@react95/core';
import '@react95/icons/icons.css';
import React from 'react';

function App() {
  const [showAlert, toggleShowAlert] = React.useState(false);

  const handleOpenAlert = () => toggleShowAlert(true);
  const handleCloseAlert = () => toggleShowAlert(false);

  return (
    <ThemeProvider>
      <div
        style={{
          marginBottom: 10,
        }}
      ></div>
      <Button onClick={handleOpenAlert}>Trigger Alert</Button>
      {showAlert && (
        <Alert
          title='Windows Networking'
          type='info'
          message='The Windows password you typed is incorrect.'
          closeAlert={handleCloseAlert}
          buttons={[
            {
              value: 'OK',
              onClick: handleCloseAlert,
            },
          ]}
        />
      )}
    </ThemeProvider>
  );
}

export default App;
