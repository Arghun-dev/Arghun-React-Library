import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import reducer from '../../reducer/message/MessageReducer'

export const MessageContext = createContext()

const state = {
  loading: false,
  success: false,
  error: false,
  message: '',
}

export default function MessageProvider({ children }) {
  const [messageState, messageDispatch] = useReducer(reducer, state)

  return (
    <MessageContext.Provider value={{ messageState, messageDispatch }}>
      {children}
    </MessageContext.Provider>
  )
}

MessageProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
