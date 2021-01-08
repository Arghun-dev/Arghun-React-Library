import React from 'react'
import PropTypes from 'prop-types'
import '../styles/LoginFormCard.scss'

export default function LoginFormCard({ children }) {
  return <div className='LoginFormCard'>{children}</div>
}

LoginFormCard.propTypes = {
  children: PropTypes.node.isRequired,
}
