import React, { useState } from 'react'
import Header from './Components/Header'
import Main from './Components/Main'

const App = () => {
  const [loading,setLoading] = useState(false);
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
