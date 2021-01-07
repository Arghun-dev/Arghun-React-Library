import React from 'react'
import PropTypes from 'prop-types'

export default function ConfirmButton({ text, action }) {
  return (
    <button className='root' type='button' onClick={() => action()}>
      {text}
    </button>
  )
}

ConfirmButton.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
}
