import React from 'react'
import PropTypes from 'prop-types'
import { Input, ConfirmButton } from '../../../components'

export default function LoginFormView({
  userName,
  password,
  setUserName,
  setPassword,
  // loginRes,
  // loginFnc
}) {
  return (
    <div>
      <Input state={userName} setState={setUserName} />
      <Input state={password} setState={setPassword} />
      <ConfirmButton text='Login' />
    </div>
  )
}

LoginFormView.propTypes = {
  setPassword: PropTypes.func.isRequired,
  setUserName: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  // loginRes: PropTypes.string.isRequired,
  // loginFnc: PropTypes.func.isRequired,
}
