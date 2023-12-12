import {
    ChakraProvider,
    Input,
    Stack,
    FormControl,
    FormLabel,
    Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';


const Login = () => {
    const router = useRouter(); // Call useRouter at the top level
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [users] = useState([
        { username: 'Julian', password: '123ABC' },
        { username: 'Fabrizio', password: '123ABC' },
    ]);


   const handleLoginClick = () => {
    const user = users.find(
        (user) =>
            user.username === formData.username && user.password === formData.password
    );

    if (user) {
        console.log('Successful login for user:', user.username);
        // Use Link to navigate to the forms page
        // Adjust the href attribute with the correct path
        // In this example, assuming forms.js is in the pages directory
        router.push('/forms');
    } else {
        console.log('Login failed. Check your credentials.');
    }
};


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
    <div>
        <ChakraProvider>
            <Stack spacing={3}>
                <FormControl isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input
                        name="username"
                        placeholder="Enter your username"
                        size="md"
                        type="text"
                        onChange={handleChange}
                        value={formData.username}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                        name="password"
                        placeholder="Enter your password"
                        size="md"
                        type="password"
                        onChange={handleChange}
                        value={formData.password}
                    />
                </FormControl>
                <Button colorScheme="blue" onClick={handleLoginClick}>
                    Login
                </Button>

                {/* Use Link to navigate to the forms page */}
                <Link href="/forms">
                </Link>
            </Stack>
        </ChakraProvider>
    </div>
);
};

export default Login;
