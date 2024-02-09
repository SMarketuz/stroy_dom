import { Box, Heading } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import { FcSearch } from "react-icons/fc";
const List = () => {
    return (
        <Box className='wrapper'mt={10} color={'white'}>
            <Heading>Spiska</Heading>
            <Box mt={10}  boxShadow={'dark-lg'} p={3} height={'730px'} overflow={'auto'}>
                <Box position={'sticky'} display={'flex'} alignItems={'center'} border={'1px'} borderColor={'gray.300'} rounded={10} top={-3} width={'100%'} bg={'#050E17'}>
                    <Box borderRight={'1px'} p={2} borderColor={'gray.300'}>
                        <FcSearch fontSize={'30px'} />
                    </Box>
                    <input type="text" style={{ border: 'none', outline: 'none', paddingLeft: '20px', width: '100%' ,background:'#050E17' }} placeholder='qidirish...' />
                </Box>
                <Table variant='simple'>
                    <Thead position={'sticky'} top={9} bg={'#050E17'} >
                        <Tr>
                            <Th>Kod</Th>
                            <Th>Prihod soni</Th>
                            <Th>Rasxod soni</Th>
                            <Th>Qolgan soni</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>25.4</Td>
                            <Td>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>25.4</Td>
                            <Td>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>25.4</Td>
                            <Td>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>25.4</Td>
                            <Td>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>25.4</Td>
                            <Td>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>25.4</Td>
                            <Td>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>25.4</Td>
                            <Td>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>25.4</Td>
                            <Td>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>25.4</Td>
                            <Td>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>25.4</Td>
                            <Td>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>25.4</Td>
                            <Td>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>25.4</Td>
                            <Td>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>25.4</Td>
                            <Td>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>25.4</Td>
                            <Td>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>25.4</Td>
                            <Td>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>25.4</Td>
                            <Td>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>25.4</Td>
                            <Td>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>25.4</Td>
                            <Td>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>25.4</Td>
                            <Td>25.4</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
        </Box>
    )
}

export default List