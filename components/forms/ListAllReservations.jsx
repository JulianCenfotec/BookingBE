// pages/listAll.js
import React, { useState, useEffect } from 'react';

const ListAll = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/reservations');
        const data = await response.json();
        setReservations(data.pets);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Reservation Table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Body</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td>{reservation.id}</td>
              <td>{reservation.Type}</td>
              <td>{reservation.Body}</td>
              <td>{reservation.User}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListAll;
