import { combineReducers } from 'redux'
import employeesReducer from './employee-reducer'
import alertReducer from './alert-reducer'
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  employees: employeesReducer,
  alert: alertReducer,
  form: formReducer
})

// If we are going to have several reducers, we must use combine them because there can only be one
