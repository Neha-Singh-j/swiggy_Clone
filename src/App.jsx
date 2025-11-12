import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import Apicalling from './components/Apicalling'

function App() {
  return (
    <div>
      <Header />
      {/* <Body  /> */}
      <Outlet />
      <Footer />

    </div>
  )
}

export default App