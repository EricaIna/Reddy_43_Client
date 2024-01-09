import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginForm } from '../../Components'

const LoginPage = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
    }




  return (
    <>
    <LoginForm/>
    </>
  )
}

export default LoginPage