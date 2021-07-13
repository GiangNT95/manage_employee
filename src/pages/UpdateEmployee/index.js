import React, { useEffect, useState } from "react";
import {
  getEmployeeById,
  updateEmployee,
} from "../../redux/actions/employee-actions";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import EmployeeActionForm from "../../components/EmployeeActionForm";
import "../../assets/styles/pages/AddAndUpdateEmployee/styles.scss";

const UpdateEmployee = ({ history, match }) => {
  const dispatch = useDispatch();
  const [employeeDetails, setEmployeeDetails] = useState();
  let employeeUpdating = useSelector(
    (state) => state.employees.employeeUpdating
  );
  let error = useSelector((state) => state.employees.error);
  let loading = useSelector((state) => state.employees.loading);
  const dispatchUpdateEmployee = (employee) =>
    dispatch(updateEmployee(employee));
  const { t } = useTranslation();

  useEffect(() => {
    if (match.params.id) {
      dispatch(getEmployeeById(match.params.id));
    }
  }, [dispatch, match.params.id]);

  useEffect(() => {
    if (employeeUpdating?.length > 0) {
      setEmployeeDetails(employeeUpdating[0]);
    }
  }, [employeeUpdating]);

  const handleSubmit = async (event) => {
    try {
      if (match.params.id) {
        const object = {
          ...employeeDetails,
          ...event,
        };
        await dispatchUpdateEmployee(object);
      }
      history.push("/employee/list");
    } catch (err) {}
  };

  return (
    <div className="add-and-update-form-block">
      {!error && !loading && (
        <>
          <h2>{t("update_employee_page_title")}</h2>
          <EmployeeActionForm
            onSubmit={handleSubmit}
            employeeDetails={employeeDetails}
            id={match.params.id}
            initialValues={employeeDetails}
          />
        </>
      )}
      {loading ? <p>{t("loading_label")}...</p> : null}
      {error ? <p>Ups! An error ocurred.</p> : null}
    </div>
  );
};
export default UpdateEmployee;
