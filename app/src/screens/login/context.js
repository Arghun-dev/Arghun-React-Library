import { func } from 'prop-types'
import React, { createContext } from 'react'
import PropTypes from 'prop-types'
import API from '../../config/api'

export const Context = createContext({
  loginURL: '',
})

export default function LoginProvider({ children }) {
  const loginURL = API.LOGIN

  return <Context.Provider value={{ loginURL }}>{children}</Context.Provider>
}

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
