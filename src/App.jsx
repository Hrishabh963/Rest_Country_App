import React, { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import CountryData from './Components/CountryData'
import Main from './Components/Main' 
import Header from './Components/Header'
const App = () => {
  const [loading,setLoading] = useState(false);
  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Main />} />
          <Route path='country/:id' element={<CountryData />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
