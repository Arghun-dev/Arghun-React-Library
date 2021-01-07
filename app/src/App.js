import React from 'react'
import './App.css'
import AuthProvider from './context/Login/authContext'
import MessageProvider from './context/message/MessageContext'
import MainRoutes from './routes/mainRoutes'

function App() {
  return (
    <AuthProvider>
      <MessageProvider>
        <MainRoutes />
      </MessageProvider>
    </AuthProvider>
  )
}

export default App
