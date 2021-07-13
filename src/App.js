import React from 'react'
import Header from './parts/Header'
import Employees from './pages/Employees'
import AddEmployee from './pages/AddEmployee'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "antd/dist/antd.css";
// Redux
import { Provider } from 'react-redux'
import store from './redux/store'
import PageNotFound from './pages/PageError/PageNotFound'
import Homepage from './pages/Homepage'

import "./assets/styles/global-styles.scss"
import UpdateEmployee from './pages/UpdateEmployee'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/employee/list' component={Employees} />
            <Route exact path='/employee/add' component={AddEmployee} />
            <Route exact path='/employee/edit/:id' component={UpdateEmployee} />
            <Route exact path='/pagenotfound' component={PageNotFound} />
          </Switch>
        </div>
      </Provider>
    </Router>
  )
}

export default App