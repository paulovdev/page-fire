import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      await login(email, password)
      navigate('/home')
    }
    catch (e) {
      setError(e.message)
    }
  }

  return (
    <main className='container d-flex flex-column  justify-content-center align-items-center p-3'
      style={{
        minHeight: '80vh'
      }}>

      <Form onSubmit={handleSubmit} className='border border-dark rounded p-4 w-100'>
        <h1>Entrar</h1>
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

        <Button variant="primary" type="submit">Entrar
        </Button>
        <Form.Group className="mb-3">
          <Form.Text >
            Nao tem uma conta? <Link to='/register'>Cadastre-se</Link>
          </Form.Text>
        </Form.Group>
      </Form>
    </main >
  );
};

export default Login;