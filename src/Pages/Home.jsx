import React from 'react'
import Nav from '../Components/Nav'
import Booking from '../Components/Booking'
import Comm from '../Components/Comm'
import Ride from '../Components/Ride'
import Postpaid from '../Components/Postpaid'
import Diff from '../Components/Diff'
import Food from '../Components/Food'
import Blogs from '../Components/Blogs'
import Download from '../Components/Download'

const Home = () => {
  return (
    <div>
        <Nav />
        <Booking />
        <Comm />
        <Ride />
        <Postpaid />
        <Diff />
        <Food />
        <Blogs />
        <Download />
    </div>
  )
}

export default Home