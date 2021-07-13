import {
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  GET_EMPLOYEE_BY_ID,
  EMPLOYEE_LIST,
  UPDATE_EMPLOYEE
} from '../types'


export function getEmployeeList() {
  return { type: EMPLOYEE_LIST, payload: true }
}
export function addEmployee(employee) {
  return { type: ADD_EMPLOYEE, payload: true, employee: employee }
}

export function deleteEmployee(id) {
  return { type: DELETE_EMPLOYEE, payload: id }
}

export function getEmployeeById(id) {
  return { type: GET_EMPLOYEE_BY_ID, payload: id }
}
export function updateEmployee(employee) {
  return { type: UPDATE_EMPLOYEE, employee: employee }
}
