import React from 'react'
import LoginContainer from './container/LoginContainer'
import Provider from './context'
import './styles/loginPage.scss'

export default function Index() {
  return (
    <Provider>
      <div className='loginPage'>
        <LoginContainer />
      </div>
    </Provider>
  )
}
