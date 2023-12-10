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
} from '@chakra-ui/react';
import React, { useState } from 'react';

const ActivyReservation = () => {
  const [formData, setFormData] = useState({
    dateTime: '',
    participants: 1,
    preferences: '',
  });

  const [request, setRequest] = useState({
    resType: 4,
    resBody: "",
    resUser: 'Julian',
  });

  const handleReserveClick = () => {
    setRequest((prevData) => ({
        ...prevData,
        resBody: formData,
        }));

    console.log(request );
    // Aquí puedes realizar la solicitud Fetch POST a la dirección "url"
    console.log('Sending request to server:', request);
    const url = 'https://booking-be.vercel.app/api/add-reservation'; // Reemplaza esto con tu URL de destino
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
      .then((response) => response.json())
      .then((data) => {
        // Puedes manejar la respuesta de la API aquí
        console.log('Response from server:', data);
      })
      .catch((error) => {
        // Puedes manejar errores aquí
        console.error('Error:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData );
  };

  return (
    <div>
      <ChakraProvider>
        <Stack spacing={3}>
          <FormControl isRequired>
            <FormLabel>Date and time</FormLabel>
            <Input
              name="dateTime"
              placeholder="Select Date and Time"
              size="md"
              type="datetime-local"
              colorScheme="green"
              onChange={handleChange}
              value={formData.dateTime}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Number of participants</FormLabel>
            <NumberInput
              defaultValue={1}
              min={1}
              max={200000}
              onChange={(value) => setFormData((prevData) => ({ ...prevData, participants: value }))}
            >
              <NumberInputField />
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel>Preferences</FormLabel>
            <Textarea
              name="preferences"
              placeholder="Dress code, minimum age..."
              onChange={handleChange}
              value={formData.preferences}
            />
          </FormControl>
          <Button colorScheme="blue" onClick={handleReserveClick}>
            Reserve
          </Button>
        </Stack>
      </ChakraProvider>
    </div>
  );
};

export default ActivyReservation;
