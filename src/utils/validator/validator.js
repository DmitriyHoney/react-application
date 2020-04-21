//data checking && validatorFunctions
export const required               = value => (value || typeof value === 'number' ? undefined : 'Required');
export const email                  = value => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return 'Invalid email address';
    else return undefined;
};
export const maxLengthCreator       = max => value => {
    if (value.length > max) return `Max length is ${max} symbols`;
    return undefined;
};
export const minLengthCreator       = min => value => {
    if (value.length < min) return `Min length is ${min} symbols`;
    return undefined;
};
