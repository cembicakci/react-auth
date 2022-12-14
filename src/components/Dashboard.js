import React, { useState } from 'react'
import { Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Dashboard() {

    const [error, setError] = useState();
    const { currentUser, logout } = useAuth();

    const navigate = useNavigate();

    async function handleLogout() {
        setError('');

        try {
            console.log("clicked")
            navigate('/login')
            await logout()

        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Profile</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    {currentUser && (<strong>Email</strong>)} {currentUser && currentUser.email}
                    <Link to='/update-profile' className='btn btn-primary w-100 mt-3'>Update Profile</Link>
                </Card.Body>
            </Card>

            <div className='w-100 text-center mt-2'>
                <Button variant='link' onClick={handleLogout}>Log Out</Button>
            </div>
        </div>
    )
}

export default Dashboard