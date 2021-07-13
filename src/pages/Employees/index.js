import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getEmployeeList, deleteEmployee } from '../../redux/actions/employee-actions'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useTranslation } from 'react-i18next'
import { frameworkComponents } from '../../utils/constant';
import { columnDefs } from './columnDefs';
import { Button, message } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import '../../assets/styles/pages/Employees/styles.scss';

const Employees = ({ history }) => {
  const [rowData, setRowData] = useState();
  const dispatch = useDispatch();
  const dispatchDeleteEmployee = (id) => dispatch(deleteEmployee(id));
  const { t } = useTranslation();
  const columnDefsInstance = columnDefs(dispatchDeleteEmployee, history, t);
  let employees = useSelector(state => state.employees.employeeList);
  let error = useSelector(state => state.employees.error);
  let success = useSelector(state => state.employees.success);
  let loading = useSelector(state => state.employees.loading);

  useEffect(() => {
    dispatch(getEmployeeList())
  },[dispatch]) 

  useEffect(() => {
    if (employees?.length > 0) {
      setRowData(employees)
    }
  }, [employees, employees.length])

  useEffect(() => {
    if(error) {
      message.error(t('error_message'), 10);
    }
    if(success) {
      if(success.deleted) {
        message.success(t('delete_employee_success_message'), 10);
      }
      if(success.updated) {
        message.success(t('update_employee_success_message'), 10);
      }
      if(success.added) {
        message.success(t('add_employee_success_message'), 10);
      }
    }
  }, [error,success,t])
  
  return (
    <div className="ag-theme-alpine table-block">
      <div>
        <h2 className="title">{t('employee_list_page_title')}</h2>
        <div className="table-block--add-block">
          <Button type="success" className="add-block__button" onClick={() => { window.location.replace("/employee/add") }}>
            <PlusCircleFilled /> {t('add_new_employee_button')}
          </Button>
        </div>
      </div>
      {error ? <p>{t('404_not_found_label')}</p> : null}
      {!error && loading ? <p>{t('loading_label')}...</p> : null}
      {!error && !loading && <AgGridReact
        rowData={rowData}
        columnDefs={columnDefsInstance}
        frameworkComponents={frameworkComponents}
        pagination={true}
        paginationPageSize={20}
      />}
    </div>
  );
}
export default (Employees);
