const maxLength = max => value => {
    if (value && value.length > max) {
        return `Must be ${max} characters or less`;
    } else {
        return undefined;
    }
}
export const maxLength10 = maxLength(10);

export const minLength = min => value => {
    return value && value.length < min ? `Must be ${min} characters or more` : undefined
}
export const minLength6 = minLength(6);

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined

export const phoneNumber = value => {
    const regex = /^\+65(6|8|9)\d{7}$/;
    return value && !regex.test(value)
        ? 'Invalid phone number'
        : undefined
}

export const required = value => {
    return (value || typeof value === 'number' ? undefined : 'The field is required')
}