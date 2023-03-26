import React from 'react'
import {useParams} from 'react-router-dom'

const HomeNested = () => {
  const params = useParams()
  console.log(params)
  return (
    <div>
      <h1>HomeNested</h1>
      <h1>{params.name}</h1>
    </div>
  )
}

export default HomeNested
