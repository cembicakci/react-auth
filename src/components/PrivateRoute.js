import React, { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function PrivateRoute({ children }) {

    const { currentUser } = useAuth()
    const navigate = useNavigate()
    console.log(!currentUser)

    useEffect(() => {
        if (!currentUser) {
            navigate('/login', { replace: true })
        }
    }, [])

    return (
        <>
            <Outlet />
        </>
    )
}

export default PrivateRoute