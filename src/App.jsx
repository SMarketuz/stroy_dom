
import Navbar from './components/navbar/navbar'
import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import { useEffect, useState } from 'react'
import Rasxod from './pages/rasxod'
import List from './pages/list'

function App() {
  const [nav, setNav] = useState(true)

  // useEffect(() => {
  //   if(window.location.pathname === '/') {
  //     setNav(false)
  //   }
  // } ,[nav])



  return (
    <Box >
        {nav && <Box >
          <Navbar />
        </Box>}


        <Box >
          <Routes >
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/rasxod' element={<Rasxod />}></Route>
            <Route path='/list' element={<List />}></Route>
          </Routes>
        </Box>
    </Box>
  )
}

export default App
