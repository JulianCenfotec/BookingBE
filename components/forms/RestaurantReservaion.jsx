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

const RestaurantReservation = () => {
    const [reservationData, setReservationData] = useState({
        date: '',
        time: '',
        numberOfDiners: 1,
        specialRequests: ''
    });
    const [request, setRequest] = useState({
        resType: 1,
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
            <h1>Restaurant Reservation</h1>
            <FormControl id="date" my={4}>
                <FormLabel>Date of reservation</FormLabel>
                <Input type="date" name="date" value={reservationData.date} onChange={handleInputChange} />
            </FormControl>

            <FormControl id="time" my={4}>
                <FormLabel>Time of reservation</FormLabel>
                <Input type="time" name="time" value={reservationData.time} onChange={handleInputChange} />
            </FormControl>

            <FormControl id="number-of-guests" my={4}>
                <FormLabel>Number of diners</FormLabel>
                <NumberInput min={1} name="numberOfDiners" value={reservationData.numberOfDiners} onChange={(value) => setReservationData({ ...reservationData, numberOfDiners: value })}>
                    <NumberInputField />
                </NumberInput>
            </FormControl>

            <FormControl id="special-requests" my={4}>
                <FormLabel>Dietary preferences or special requests</FormLabel>
                <Textarea name="specialRequests" value={reservationData.specialRequests} placeholder="Enter here any preference or special request" onChange={handleInputChange} />
            </FormControl>

            <Button colorScheme="blue" mt={4} onClick={handleReserve}>Reserve</Button>

        </Box>
    )
}

export default RestaurantReservation
