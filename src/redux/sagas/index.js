import { put, takeEvery, all, call } from 'redux-saga/effects'
import {
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  DELETED_EMPLOYEE,
  UPDATE_EMPLOYEE,
  EMPLOYEE_LIST,
  EMPLOYEE_LOADED,
  GET_EMPLOYEE_BY_ID,
  EMPLOYEE_UPDATING,
  ADD_EMPLOYEE_FAIL,
  GET_EMPLOYEE_LIST_FAIL,
  DELETE_FAIL,
  UPDATE_EMPLOYEE_FAIL,
  GET_EMPLOYEE_BY_ID_ERR,
  UPDATED_EMPLOYEE,
  ADDED_EMPLOYEE
} from '../types'


import {
  retrieveEmployeesDB,
  addEmployeeDB,
  deleteEmployeeDB,
  editEmployeeDB,
  getEmployeeByIdDB
} from '../../services'

function* getEmployeeList() {
  try {
    const { data } = yield call(retrieveEmployeesDB);
    yield put({
      type: EMPLOYEE_LOADED,
      payload: data
    })
  } catch (error) {
    yield put({
      type: GET_EMPLOYEE_LIST_FAIL,
      payload: error
    })
  }
}

function* getEmployeeListSaga() {
  yield takeEvery(EMPLOYEE_LIST, getEmployeeList)
}

function* addEmployee(action) {
  const employee = action.employee
  try {
    yield call(addEmployeeDB, employee)
    yield put({
      type: ADDED_EMPLOYEE
    })
    yield put({
      type: EMPLOYEE_LIST, payload: true
    })
  } catch (error) {
    yield put({
      type: ADD_EMPLOYEE_FAIL,
      payload: error
    })
  }
}

function* addEmployeeSaga() {
  yield takeEvery(ADD_EMPLOYEE, addEmployee)
}

function* deleteEmployee(action) {
  const id = action.payload
  try {
    yield call(deleteEmployeeDB, id)
    yield put({
      type: DELETED_EMPLOYEE
    })
  } catch (error) {
    yield put({
      type: DELETE_FAIL,
      payload: error,
    })
  }
}

function* deleteEmployeeSaga() {
  yield takeEvery(DELETE_EMPLOYEE, deleteEmployee)
}

function* updateEmployee(action) {
  const employee = action.employee;
  try {
    yield call(editEmployeeDB, employee)
    yield put({
      type: UPDATED_EMPLOYEE, payload: true
    })
    yield put({
      type: EMPLOYEE_LIST, payload: true
    })
  } catch (error) {
    yield put({
      type: UPDATE_EMPLOYEE_FAIL,
      payload: error,
    })
  }
}

function* updateEmployeeSaga() {
  yield takeEvery(UPDATE_EMPLOYEE, updateEmployee)
}

function* getEmployeeById(action) {
  const employeeId = action.payload;
  try {
    const { data } = yield call(getEmployeeByIdDB, employeeId);
    yield put({
      type: EMPLOYEE_UPDATING,
      employeeUpdating: data
    })
  } catch (error) {
    yield put({
      type: GET_EMPLOYEE_BY_ID_ERR,
      payload: error
    })
  }
}

function* getEmployeeByIdSaga() {
  yield takeEvery(GET_EMPLOYEE_BY_ID, getEmployeeById)
}

export default function* rootSaga() {
  yield all([
    addEmployeeSaga(),
    deleteEmployeeSaga(),
    updateEmployeeSaga(),
    getEmployeeListSaga(),
    getEmployeeByIdSaga()
  ])
}
