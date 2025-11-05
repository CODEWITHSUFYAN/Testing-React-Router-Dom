import React from 'react'
import Header from "./components/Header.jsx"
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <main>
      <Header></Header>
      <Outlet></Outlet>
      <h1>Footer</h1>
    </main>
  )
}

export default App