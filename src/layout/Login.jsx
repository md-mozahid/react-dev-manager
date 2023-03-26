import React, { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Label from '../components/Label'
import Title from '../components/Title'

const initialData = {
  email: '',
  password: '',
}
export default function Login() {
  const [userData, setUserData] = useState(initialData)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()

    const userError = {
      email: '',
      password: '',
    }

    let isError = false

    if (
      email === '' ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    ) {
      isError = true
      userError.email = 'Email is required or input valid email address !'
    }
    if (password === '') {
      isError = true
      userError.password = 'Password is required !'
    }

    setError(userError)
    if (isError) return

    setSubmitted(true)
    setUserData(initialData)
  }

  //get input value
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }

  //destructure
  const { email, password } = userData

  return (
    <div className="container">
      <Title>User Login</Title>

      {submitted && <h3>Login successfully</h3>}

      <form onSubmit={handleSubmit} noValidate>
        <Label htmlFor="email">Email :</Label>
        <Input
          name="email"
          id="email"
          placeholder="Email*"
          value={email}
          onChange={handleChange}
        />
        <p className="errMsg">{error.email}</p>

        <Label htmlFor="password">Password :</Label>
        <Input
          name="password"
          id="password"
          placeholder="Password*"
          value={password}
          onChange={handleChange}
        />
        <p className="errMsg">{error.password}</p>

        <Button type='submit' className="btn-m btn-fw">Login</Button>
      </form>
    </div>
  )
}
