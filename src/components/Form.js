import React from 'react'


const Form = ({ children }) => {
    return (
        <form>
            { children }
        </form>
    )
}

const classForFormGroup = (check) => {
    let className = "form-group"
    if (check) {
        className = "form-check"
    }
    return className
}

const disabledForFormGroup = (enable) => {
    let disabled = false
    if (enable) {
        disabled = true
    }
    return disabled
}

const FormGroup = ({ check = false, enable = false, children }) => {
    let disabled = disabledForFormGroup(enable)
    let className = classForFormGroup(check)

    if (className === 'form-check') {
        if (disabled === true) {
            className += ' disabled'
        }
    }
    
    return (
        <div className={ className }>
            { children }
        </div>
    )
}

const FormLabel = ({ check = false, labelName, children }) => {
    let labelType = classForFormGroup(check)

    if (labelType === "form-group") {
        return (
            <label htmlFor={ labelName }>
                { children }
            </label>
        )
    }
    else {
        return (
            <label class="form-check-label">
                { children }
            </label>
        )
    }
}

const FormInput = ({ type = "text", id, name, placeholder, value, aria = false, ariaDescribedByID, disabled, ariaText, children }) => {
    if (type === "text" || type === "email" || type === "password") {
        if (aria === true) {
            return (
                [<input type={ type } class="form-control" id={ id } aria-describedby={ ariaDescribedByID } placeholder={ placeholder } />,
                <small id={ ariaDescribedByID } class="form-text text-muted">
                    { ariaText }
                </small>]
            )
        }
        else {
            return (
                <input type={ type } class="form-control" id={ id } placeholder={ placeholder } />
            )
        }
    }
    else {
        return (
            <input class="form-check-input" type={ type } name={ name } id={ id } value={ value } disabled={ disabled }/>
        )
    }
}

export { Form, FormGroup, FormLabel, FormInput }
