import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '../../../components/index'
import { LoginFormCard, LoginButton, LoginHeader } from '../components'
// import { singInWithGoogle } from '../../../firebase/firebase.utils'
import '../styles/loginPresent.scss'

export default function LoginPresent({
  userName,
  setUserName,
  password,
  setPassword,
  loginFnc,
  loginRes,
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
        <LoginButton
          text='Login'
          action={loginFnc}
          loading={loginRes?.isLoading}
        />
      </LoginFormCard>
      <p className='LoginPresent_Footer'>
        LET&apos;S MAKE THE WORLD MORE PRODUCTIVE, TOGETHER.
      </p>
    </div>
  )
}

LoginPresent.propTypes = {
  setPassword: PropTypes.func.isRequired,
  setUserName: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  loginFnc: PropTypes.func.isRequired,
  loginRes: PropTypes.instanceOf(Array).isRequired,
}
