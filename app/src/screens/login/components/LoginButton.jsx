import React from 'react'
import PropTypes from 'prop-types'
import '../styles/LoginButton.scss'

export default function ConfirmButton({ text, action }) {
  return (
    <button className='LoginButton' type='button' onClick={() => action()}>
      {text}
    </button>
  )
}

ConfirmButton.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
}
