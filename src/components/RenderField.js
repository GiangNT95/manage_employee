import React, { useEffect, useState } from 'react';
import { Input, Typography } from 'antd';
import "../assets/styles/components/RenderFieldStyles.scss";

const RenderField = ({ input, label, type, previousValue, meta: { touched, error, warning } }) => {
    const [value, setValue] = useState();
    const { Text } = Typography;
    
    useEffect(() => {
        setValue(previousValue)
    }, [previousValue])

    return (
        <div className="render-field-block">
            <label>{label}</label>
            <div>
                <Input {...input} className={`${touched && (error || warning) ? "render-field-block--have-error" : ""}`} placeholder={label} type={type} value={value} onChange={(e) => { setValue(e.target.value) }} />
                {touched &&
                    ((error && <Text type="danger">{error}</Text>) ||
                        (warning && <Text>{warning}</Text>))}
            </div>
        </div>
    )
}
export default RenderField