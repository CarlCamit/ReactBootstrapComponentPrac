import React from 'react'

const Alert = ({ children, status = 'none' }) => {
    let className = 'alert'

    if (status === 'primary') {
        className += ' alert-primary'
    }
    else if (status === 'secondary') {
        className += ' alert-secondary'
    }
    else if (status === 'success') {
        className += ' alert-success'
    }
    else if (status === 'danger') {
        className += ' alert-danger'
    }
    else if (status === 'warning') {
        className += ' alert-warning'
    }
    else if (status === 'info') {
        className += ' alert-info'
    }
    else if (status === 'dark') {
        className += ' alert-dark'
    }
    else if (status === 'light') {
        className += ' alert-light'
    }
    else {
    }

    return (
        <div className={ className } role='alert' >
            { children }
        </div>
    )
}


export default Alert