import React from 'react'
import { addEmployee } from '../../redux/actions/employee-actions'
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next'
import EmployeeActionForm from '../../components/EmployeeActionForm';
import '../../assets/styles/pages/AddAndUpdateEmployee/styles.scss'

const AddEmployee = ({ history }) => {
  const dispatch = useDispatch();
  let error = useSelector(state => state.employees.error);
  let loading = useSelector(state => state.employees.loading);
  const dispatchAddEmployee = (employee) => dispatch(addEmployee(employee));
  const { t } = useTranslation();

  const handleSubmit = async event => {
    try {
      if (!event.gender) {
        event.gender = "male";
      }
      await dispatchAddEmployee(event)
      history.push('/employee/list')
    } catch (err) {

    }
  }

  return (
    <div className="add-and-update-form-block">
      {!error && !loading && <><h2>{t('new_employee_page_title')}</h2>
        <EmployeeActionForm onSubmit={handleSubmit} /></>}
      {loading ? <p>{t('loading_label')}...</p> : null}
      {error ? <p>Ups! An error ocurred.</p> : null}
    </div>
  )
}
export default (AddEmployee);