import React, { Suspense, lazy, useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom'
import { AuthContext } from '../context/Login/authContext'
import { GoogleAuthContext } from '../context/Login/googleAuthContext'

const Login = lazy(() => import('../screens/login'))
const Home = lazy(() => import('../screens/home'))

export default function MainRoutes() {
  const { token } = useContext(AuthContext)
  const { currentUser } = useContext(GoogleAuthContext)
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {token?.length > 0 || currentUser ? (
            <Redirect to='/home' component={Home} />
          ) : (
            <Route to='/' component={Login} />
          )}
        </Switch>
      </Suspense>
    </Router>
  )
}
