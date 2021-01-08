import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '../../../components/index'
import { LoginFormCard, LoginButton, LoginHeader } from '../components'
import '../styles/loginPresent.scss'

export default function LoginPresent({
  userName,
  password,
  setUserName,
  setPassword,
  // loginRes,
  // loginFnc
}) {
  return (
    <div className='LoginPresent_Container'>
      <div className='loginPresent_Header'>
        <LoginHeader />
      </div>
      <LoginFormCard>
        <h1 className='loginForm_header'>Welcome Back!</h1>
        <Input
          state={userName}
          setState={setUserName}
          label='Email'
          iconName='fa-user'
          iconStyle={{
            position: 'absolute',
            marginTop: '-3.5%',
            marginLeft: '-24%',
          }}
          style={{ marginBottom: '2rem' }}
        />
        <Input
          state={password}
          setState={setPassword}
          label='Password'
          style={{ marginBottom: '2rem' }}
        />
        <LoginButton text='Login' />
      </LoginFormCard>
    </div>
  )
}

LoginPresent.propTypes = {
  setPassword: PropTypes.func.isRequired,
  setUserName: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  // loginRes: PropTypes.string.isRequired,
  // loginFnc: PropTypes.func.isRequired,
}
