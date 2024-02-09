import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import Tablee from '../components/table/table'

const Home = () => {
    return (
        <Box mx={5}>
            <Heading>Prixod</Heading>
            <Flex mt={5} gap={4}alignItems={{base: 'center' , md: 'flex-end'}} flexDirection={{base: 'column' ,md: 'row'}}>
                <FormControl>
                    <FormLabel>Kod</FormLabel>
                    <Input type='text' placeholder='kod...' />
                </FormControl>

                <FormControl>
                    <FormLabel>Partiya</FormLabel>
                    <Input type='text' placeholder='partiya...' />
                </FormControl>
                <FormControl>
                    <FormLabel>Soni</FormLabel>
                    <Input type='number' placeholder='son...' />
                </FormControl>

                <Button bg={'gray'} _hover={{ bg: '' }} width={'300px'} color={'white'}>Saqlash</Button>
            </Flex>
            <Tablee />
        </Box>
    )
}

export default Home