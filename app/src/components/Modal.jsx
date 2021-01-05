import React from 'react'
import PropTypes from 'prop-types'

export default function Modal({ children }) {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close'>&times;</span>
        {children}
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
}
