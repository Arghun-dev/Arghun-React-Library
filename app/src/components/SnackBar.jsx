import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { MessageContext } from '../context/message/MessageContext'
import './styles/SnackBar.css'

export default function SnackBar({ message }) {
  const { messageState } = useContext(MessageContext)
  return (
    <div
      className='snackbar'
      style={{
        backgroundColor: messageState.success 
          ?
            '#4BCA81'
          : 
          messageState.error ? '#D8000C' : ''
      }}
    >
      {message}
    </div>
  )
}

SnackBar.propTypes = {
  message: PropTypes.node.isRequired,
}
