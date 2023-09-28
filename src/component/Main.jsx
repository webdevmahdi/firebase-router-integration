import React from 'react'
import Header from './Header/Header'
import Home from './Home/Home'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
        <Header></Header>
        <Home></Home>
        <Outlet></Outlet>
    </div>
  )
}

export default Main