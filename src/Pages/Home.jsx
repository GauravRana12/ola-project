import React from 'react'
import Nav from '../Components/Nav'
import Booking from '../Components/Booking'
import Comm from '../Components/Comm'
import Ride from '../Components/Ride'

const Home = () => {
  return (
    <div>
        <Nav />
        <Booking />
        <Comm />
        <Ride />
    </div>
  )
}

export default Home