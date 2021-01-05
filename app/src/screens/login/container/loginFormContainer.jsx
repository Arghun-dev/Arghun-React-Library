import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { usePost } from '../../../services'
import { Context } from '../context'
import LoginFormPresent from '../presentation/loginFormPresent'

export default function LoginFormContainer() {
  const { loginURL } = useContext(Context)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const loginPayload = {
    userName,
    password,
  }

  const [res, fnc] = usePost({ url: loginURL, payload: loginPayload })

  return (
    <LoginFormPresent
      loginRes={res}
      loginFnc={fnc}
      userName={userName}
      setUserName={setUserName}
      password={password}
      setPassword={setPassword}
    />
  )
}

LoginFormPresent.propTypes = {
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUserName: PropTypes.fnc,
  setPassword: PropTypes.fnc,
  loginRes: PropTypes.instanceOf(Array),
}
