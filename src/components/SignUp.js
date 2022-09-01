import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext';

function SignUp() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signup, currentuser} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Password do not match");
        }

        try {
            setError('')
            setLoading(true)
            console.log(emailRef.current.value, passwordRef.current.value)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError("Failed to create an account")
        }
        setLoading(false)

    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className='text-center'>Sign Up</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id='password-confirm'>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type='password' ref={passwordConfirmRef} required></Form.Control>
                        </Form.Group>

                        <Button disabled={loading} className='w-100' type='submit' >Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>

            <div className='w-100 text-center mt-2'>
                Already have an account? Log In
            </div>
        </div>
    )
}

export default SignUp