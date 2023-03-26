import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  const location = useLocation()
console.log(location)
  useEffect(() => {
    navigate('/login')
  }, [navigate])
  return (
    <div>
      <h1>Home page</h1>
      <Outlet />
    </div>
  )
}

export default Home
