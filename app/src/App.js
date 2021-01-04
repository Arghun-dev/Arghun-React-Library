import React from 'react'
import './App.css'
import AuthProvider from './context/Login/authContext'
import MainRoutes from './routes/mainRoutes'

function App() {
  return (
    <AuthProvider>
      <MainRoutes />
    </AuthProvider>
  )
}

export default App
