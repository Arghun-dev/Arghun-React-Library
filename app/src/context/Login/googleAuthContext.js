import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const GoogleAuthContext = createContext({
  currentUser: null,

  setCurrentUser: () => {},
})

export default function GoogleAuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

  return (
    <GoogleAuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </GoogleAuthContext.Provider>
  )
}

GoogleAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
