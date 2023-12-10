import React, { useState } from 'react';
import {
    ChakraProvider,
    Input,
    Stack,
    FormControl,
    FormLabel,
    NumberInput,
    NumberInputField,
    Button,
    Textarea,
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td
} from '@chakra-ui/react'

const FlightReservation = () => {
    const [reservationData, setReservationData] = useState({
        origin: '',
        destination: '',
        dateTime: '',
        numberOfPassengers: 1,
        details: ''
    });

    const [request, setRequest] = useState({
        resType: 3,
        resBody: "",
        resUser: 'Julian',
  });

    const handleInputChange = (e) => {
        setReservationData({ ...reservationData, [e.target.name]: e.target.value });
        console.log(reservationData );
    };

    const handleNumberChange = (value) => {
        setReservationData({ ...reservationData, numberOfPassengers: value });
    console.log(request );
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
        <div>
            <h1>Flight Reservation</h1>
            <ChakraProvider>
                <Stack spacing={3}>
                    <FormControl isRequired>
                        <FormLabel>From?</FormLabel>
                        <Input
                            name="origin"
                            variant='outline'
                            placeholder='Origin'
                            colorScheme='green'
                            value={reservationData.origin}
                            onChange={handleInputChange} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>To?</FormLabel>
                        <Input
                            name="destination"
                            variant='outline'
                            placeholder='Destination'
                            colorScheme='green'
                            value={reservationData.destination}
                            onChange={handleInputChange} />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Date and time</FormLabel>
                        <Input
                            name="dateTime"
                            placeholder="Select Date and Time"
                            size="md"
                            type="datetime-local"
                            colorScheme='green'
                            value={reservationData.dateTime}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Number of passengers</FormLabel>
                       
                        <NumberInput defaultValue={1} min={1} max={5} value={reservationData.numberOfPassengers} onChange={handleNumberChange}>
                            <NumberInputField />
                        </NumberInput>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Details</FormLabel>
                        <Textarea name="details" placeholder="Seat, luggage, food..." value={reservationData.details} onChange={handleInputChange} />
                    </FormControl>
                    <Button colorScheme='blue' onClick={handleReserve}>Reserve</Button>
                </Stack>
            </ChakraProvider>
        </div>
    )
}

export default FlightReservation
