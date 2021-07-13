import axiosClient from '../config/axios'
//get list
export async function retrieveEmployeesDB() {
  return await axiosClient.get('/employees')
}
// add employee
export async function addEmployeeDB(employee) {
  return await axiosClient.post('/employees', employee)
}
// delete employee
export async function deleteEmployeeDB(id) {
  return await axiosClient.delete(`/employees/${id}`)
}
// edit employee
export async function editEmployeeDB(employee) {
  return await axiosClient.put(`/employees/${employee.id}`, employee)
}
// get employee by ID
export async function getEmployeeByIdDB(id) {
  return await axiosClient.get(`/employees?id=${id}`);
}
