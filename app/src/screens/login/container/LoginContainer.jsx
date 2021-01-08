import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { usePost } from '../../../services'
import { GoogleAuthContext } from '../../../context/Login/googleAuthContext'
import { AuthContext } from '../../../context/Login/authContext'
import { Context } from '../context'
import LoginPresent from '../presentation/LoginPresent'
import { auth } from '../../../firebase/firebase.utils'

export default function LoginContainer() {
  const { loginURL } = useContext(Context)
  const { setCurrentUser } = useContext(GoogleAuthContext)
  const { onSetToken } = useContext(AuthContext)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const loginPayload = {
    userNameOrEmail: userName,
    password,
  }

  const [res, fnc] = usePost({
    url: loginURL,
    payload: loginPayload,
    Reload: () => console.log('success'),
  })

  // set token
  useEffect(() => {
    onSetToken(res?.data?.token)
  }, [res])

  // google singIn
  useEffect(() => {
    auth.onAuthStateChanged((user) => setCurrentUser(user))
  }, [])

  return (
    <LoginPresent
      loginRes={res}
      loginFnc={fnc}
      userName={userName}
      setUserName={setUserName}
      password={password}
      setPassword={setPassword}
    />
  )
}

LoginPresent.propTypes = {
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUserName: PropTypes.fnc,
  setPassword: PropTypes.fnc,
  loginRes: PropTypes.instanceOf(Array),
}
