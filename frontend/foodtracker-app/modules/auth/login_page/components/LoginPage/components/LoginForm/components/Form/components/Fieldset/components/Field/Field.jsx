export const Field = ({ fieldName, fieldType }) => {
    const fieldNameToTag = (fieldName) => {
        return `${fieldName}-field`;
    }

    const isPasswordField = (fieldType) => {
        if (fieldType !== "password") {
            return "email";
        }
        return "password";
    }

    return (
        <div>
            <label htmlFor={fieldNameToTag(fieldName)}>{fieldName}</label>
            <input type={isPasswordField(fieldType)} id={fieldNameToTag(fieldName)} />
        </div>
    )
}