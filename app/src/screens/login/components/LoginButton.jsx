import React from 'react'
import PropTypes from 'prop-types'
import Loading from '../../../components/Loading'
import '../styles/LoginButton.scss'

export default function ConfirmButton({ text, action, loading }) {
  return (
    <button
      disabled={loading}
      className='LoginButton'
      type='button'
      onClick={() => action()}
    >
      {loading ? <Loading /> : text}
    </button>
  )
}

ConfirmButton.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}
