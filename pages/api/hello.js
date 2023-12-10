import React, { useState } from 'react';

export default function YourComponent() {
  const [responseMessage, setResponseMessage] = useState();

  const addReservation = async () => {
    const data = {
      resType: 1,
      resBody: 'someText',
      resUser: 'onlineTestCommit',
    };

    try {
      const response = await fetch('/api/add-reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });


    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <button onClick={addReservation}>Add Reservation</button>
      <p>{responseMessage}</p>
    </div>
  );
}
