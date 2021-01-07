import React from 'react'
import PropTypes from 'prop-types'

export default function Input({ state, setState }) {
  return (
    <input
      className='root'
      value={state}
      onChange={(e) => setState(e.target.value)}
    />
  )
}

Input.propTypes = {
  state: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setState: PropTypes.func.isRequired,
}
