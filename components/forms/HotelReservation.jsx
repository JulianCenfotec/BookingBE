import React, { useState } from 'react';
import {
    Input,
    NumberInput,
    NumberInputField,
    Textarea,
    FormControl,
    FormLabel,
    Button,
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td
} from '@chakra-ui/react'

const HotelReservation = () => {
    const [reservationData, setReservationData] = useState({
        checkIn: '',
        checkOut: '',
        numberOfPeople: 1,
        roomPreferences: ''
    });
        const [request, setRequest] = useState({
        resType: 2,
        resBody: "",
        resUser: 'Julian',
  });

    const handleInputChange = (e) => {
        setReservationData({ ...reservationData, [e.target.name]: e.target.value });
    };

    const updRequest = async () => {
    return new Promise((resolve) => {
    setRequest((prevData) => ({
      ...prevData,
      resBody: reservationData,
    }));

    console.log(request);
    resolve(); // Resolvemos la promesa cuando la actualización del estado esté completa
  });
};

const preRequest = async () => {
  await updRequest();
}

const handleReserve = async () => {
await preRequest();
  console.log('Sending request to server:', request);
  const url = 'https://booking-be.vercel.app/api/add-reservation'; 
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    const data = await response.json();
    console.log('Response from server:', data);
  } catch (error) {
    console.error('Error:', error);
  }
};

    return (
        <Box p={4}>
            <h1>Hotel Reservation</h1>
            <FormControl id="check-in-date" my={4}>
                <FormLabel>Check-in date</FormLabel>
                <Input type="date" name="checkIn" value={reservationData.checkIn} onChange={handleInputChange} />
            </FormControl>

            <FormControl id="check-out-date" my={4}>
                <FormLabel>Check-out date</FormLabel>
                <Input type="date" name="checkOut" value={reservationData.checkOut} onChange={handleInputChange} />
            </FormControl>

            <FormControl id="number-of-people" my={4}>
                <FormLabel>Number of persons</FormLabel>
                <NumberInput min={1} name="numberOfPeople" value={reservationData.numberOfPeople} onChange={(value) => setReservationData({ ...reservationData, numberOfPeople: value })}>
                    <NumberInputField />
                </NumberInput>
            </FormControl>

            <FormControl id="room-preferences" my={4}>
                <FormLabel>Room preferences</FormLabel>
                <Textarea name="roomPreferences" value={reservationData.roomPreferences} placeholder="Enter your room preferences here" onChange={handleInputChange} />
            </FormControl>

            <Button colorScheme="blue" mt={4} onClick={handleReserve}>Reserve</Button>
        </Box>
    )
}

export default HotelReservation
