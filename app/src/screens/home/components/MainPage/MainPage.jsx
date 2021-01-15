import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './MainPage.scss'

// routes
const ConditionalInJsx = lazy(() => import('../../../conditionalInJsx'))
const AsyncNatureOfSetState = lazy(() =>
  import('../../../asyncNatureOfSetState')
)

export default function MainPage() {
  return (
    <div className='Main_Page'>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route
              exact
              path='/conditional-in-jsx'
              component={ConditionalInJsx}
            />
            <Route
              exact
              path='/async-nature-of-setState'
              component={AsyncNatureOfSetState}
            />
          </Switch>
        </Suspense>
      </Router>
    </div>
  )
}
