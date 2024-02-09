import { Box, Button, Input } from '@chakra-ui/react'
import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
const Login = () => {
    return (
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} minHeight={'100vh'} bg={'gray'}>
            <Box width={{base: '100%' , md: '400px'}} p={10} border={'1px'} borderColor={'white'} rounded={10}>
                <FormControl isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input type='email' placeholder='username...' />
                </FormControl>

                <FormControl isRequired mt={5}>
                    <FormLabel>Password</FormLabel>
                    <Input type='password' placeholder='password...' />
                </FormControl>

                <Box mt={5}>
                    <Button width={'100%'}>Kirish</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Login