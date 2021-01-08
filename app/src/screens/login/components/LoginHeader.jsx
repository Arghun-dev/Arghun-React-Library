import React from 'react'
import SignupButton from './SignupButton'
import '../styles/LoginHeader.scss'

export default function LoginHeader() {
  return (
    <div className='LoginHeader'>
      <h2 className='LoginHeader_title'>Arghun React</h2>
      <span className='LoginHeader_right'>
        <p className='LoginHeader_right_text'>Don&apos;t have an account?</p>
        <SignupButton />
      </span>
    </div>
  )
}
