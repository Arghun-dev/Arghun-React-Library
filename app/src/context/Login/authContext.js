import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const AuthContext = createContext({
  token: '',

  onSetToken: () => {},
})

export default function AuthProvider({ children }) {
  const [token, setToken] = useState('')
  const onSetToken = (item) => setToken(item)

  return (
    <AuthContext.Provider value={{ token, onSetToken }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
