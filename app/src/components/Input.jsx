import React from 'react'
import PropTypes from 'prop-types'
import './styles/Input.scss'

export default function Input({ state, setState, label, style }) {
  return (
    <>
      <label htmlFor='input' className='label'>
        {label}
      </label>
      <input
        className='Input'
        placeholder='&#61447;'
        id='input'
        value={state}
        onChange={(e) => setState(e.target.value)}
        style={{ ...style }}
      />
    </>
  )
}

Input.propTypes = {
  state: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setState: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  style: PropTypes.instanceOf(Array).isRequired,
}
