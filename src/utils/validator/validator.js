
export const required = value => value ? undefined : 'Required';

export const maxLength = (max) => {
    return (value) => {
        if(value.length > max) return `Must be ${max} characters or less`;
        else return undefined;
    }
}
