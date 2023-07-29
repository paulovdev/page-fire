import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const { CreateUser } = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      await CreateUser(email, password)
      navigate('/account')
    }
    catch (e) {
      setError(e.message)
    }
  }


  return (
    <main className='container d-flex flex-column  justify-content-center align-items-center w-25 p-3'
      style={{
        minHeight: '80vh'
      }}>
      <Form onSubmit={handleSubmit} className='border border-dark rounded p-4 w-100'>
        <h1>Criar conta</h1>
        {error && <p>{error}</p>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            id="email-address"
            name="email"
            type="email"
            required
            placeholder="Seu email"
            onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            id="password"
            name="password"
            type="password"
            required
            placeholder="Sua Senha"
            onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit" >Entrar
        </Button>

        <Form.Group className="mb-3">
          <Form.Text >
            Ja tem uma conta? <Link to='/login'>Entre</Link>
          </Form.Text>
        </Form.Group>
      </Form>
    </main >
  );
};
export default Register