import React from "react";
import { Popconfirm } from 'antd';
import {
  EditTwoTone,
  DeleteTwoTone
} from '@ant-design/icons';
import "../assets/styles/components/TableActionRenderStyles.scss";
import { useTranslation } from 'react-i18next'
const TableActionRender = (props) => {
  const { t } = useTranslation();
  
  const btnDeleteHandler = () => {
    props.delete(props.data)
  }

  const btnUpdateHandler = () => {
    props.update(props.data)
  }

  return (
    <div className="btn-cell-renderer-block">
      <EditTwoTone className="btn-cell-renderer-block--action-icon" onClick={(e) => { btnUpdateHandler(e) }} twoToneColor="#FFC107" />
      &nbsp;
      <Popconfirm title={t('delete_employee_confirm')}
        onConfirm={() => {
          btnDeleteHandler()
        }}
        okText="Yes"
        cancelText="No"
      >
        <DeleteTwoTone className="action-icon" twoToneColor="#F44336" />
      </Popconfirm>
    </div>
  )
}
export default TableActionRender;