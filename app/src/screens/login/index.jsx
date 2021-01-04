import React from 'react'
import LoginFormContainer from './container/loginFormContainer'
import Provider from './context'

export default function Index() {
  return (
    <Provider>
      <LoginFormContainer />
    </Provider>
  ) 
}
