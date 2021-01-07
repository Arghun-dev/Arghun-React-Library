import React, { Suspense, lazy, useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthContext } from '../context/Login/authContext'

const Login = lazy(() => import('../screens/login'))
const Home = lazy(() => import('../screens/home'))

export default function MainRoutes() {
  const { token } = useContext(AuthContext)
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {token.length > 0 ? (
            <Route path='/home' component={Home} />
          ) : (
            <Route exact path='/' component={Login} />
          )}
        </Switch>
      </Suspense>
    </Router>
  )
}
