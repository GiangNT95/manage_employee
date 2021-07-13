import React, { useEffect, useState } from 'react';
import { Field, reduxForm, isDirty } from 'redux-form';
import { useSelector } from 'react-redux';
import { maxLength10, minLength6, email, phoneNumber, required } from '../utils/validate'
import RenderField from './RenderField';
import { Button, Modal, message } from 'antd';
import { useTranslation } from 'react-i18next'
import "../assets/styles/components/EmployeeDetailsStyles.scss";

const EmployeeActionForm = props => {
    const { handleSubmit, employeeDetails, pristine } = props;
    const [gender, setGender] = useState("male");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { t } = useTranslation();
    let dirtyCheck = useSelector(state => isDirty('employee-form')(state));
    let error = useSelector(state => state.employees.error);

    useEffect(() => {
        if (props.id && employeeDetails?.gender) {
            setGender(employeeDetails?.gender)
        }
    }, [employeeDetails, props.id])

    useEffect(() => {
        if (error) {
            message.error(t('error_message'), 10);
        }
    }, [error,t])

    const cancelHandler = () => {
        if (dirtyCheck) {
            setIsModalVisible(true)
        } else {
            window.location.replace('/employee/list');
        }
    }

    const handleOk = () => {
        window.location.replace('/employee/list');
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="employee-details-block">
            <Modal title="Notification" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>{t('dirty_check_form_employee_action')}</p>
            </Modal>
            <form onSubmit={handleSubmit}>
                <div className="employee-details-block--field-item">
                    <Field
                        name="firstName"
                        type="text"
                        label={t('first_name_field') + "*"}
                        component={RenderField}
                        validate={[required, maxLength10, minLength6]}
                        previousValue={props.id && employeeDetails?.firstName}
                    />
                </div>
                <div className="employee-details-block--field-item">
                    <Field
                        name="lastName"
                        type="text"
                        label={t('last_name_field') + "*"}
                        component={RenderField}
                        validate={[required, maxLength10, minLength6]}
                        previousValue={props.id && employeeDetails?.lastName}
                    />
                </div>
                <div className="employee-details-block--field-item">
                    <Field
                        name="emailAddress"
                        type="email"
                        label={t('email_address_field') + "*"}
                        component={RenderField}
                        validate={[required, email]}
                        previousValue={props.id && employeeDetails?.emailAddress}
                    />
                </div>
                <div className="employee-details-block--field-item">
                    <Field
                        name="phoneNumber"
                        type="text"
                        label={t('phone_number_field') + "*"}
                        component={RenderField}
                        validate={[required, phoneNumber]}
                        previousValue={props.id && employeeDetails?.phoneNumber}
                    />
                </div>
                <div className="employee-details-block--field-item">
                    <label>{t('gender_field')}</label>
                    <div>
                        <label className="employee-details-block--field-item--gender">
                            <Field name="gender" component="input" type="radio" value="male" onClick={() => { setGender("male") }} checked={gender === "male"} />
                            &nbsp;{t('male_label')}
                        </label>
                        <label className="employee-details-block--field-item--gender">
                            <Field name="gender" component="input" type="radio" value="female" onClick={() => { setGender("female") }} checked={gender === "female"} />
                            &nbsp;{t('female_label')}
                        </label>
                    </div>
                </div>
                <div className="employee-details-block--button-block">
                    <button type="submit" className="employee-details-block--button-block_submit" disabled={!props.id && pristine}>{t('submit_button_label')}</button>
                    <Button type="success" onClick={cancelHandler}>
                        {t('cancel_button_label')}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default reduxForm({
    form: 'employee-form'
})(EmployeeActionForm);
