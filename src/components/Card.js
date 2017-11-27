import React from 'react'

const Card = ({ children, style }) => {

    return (
        <div className='card' style={{ width: '20rem' }}>
            { children }
        </div>
    )
}

const CardImg = ({ src, alt }) => {
    let className = 'card-img-top'

    return (
        <img className={ className } src={ src } alt={ alt } />
    )
}

const CardBody = ({ children }) => {
    return (
        <div className='card-body'>
            { children }
        </div>
    )
}

const CardTitle = ({ level, children }) => {
    if (level === '1') {
        return (
            <h1 className='card-title'>
                { children }
            </h1>
        )
    }
    else if (level === '2') {
        return (
            <h2 className='card-title'>
                { children }
            </h2>
        )
    }
    else if (level === '3') {
        return (
            <h3 className='card-title'>
                { children }
            </h3>
        )
    }
    else if (level === '4') {
        return (
            <h4 className='card-title'>
                { children }
            </h4>
        )
    }
    else if (level === '5') {
        return (
            <h5 className='card-title'>
                { children }
            </h5>
        )
    }
    else {
        return (
            <h6 className='card-title'>
                { children }
            </h6>
        )
    }

}

const CardText = ({ children }) => {
    return (
        <p className='card-text'>
            { children }
        </p>
    )
}

export { Card, CardImg, CardBody, CardTitle, CardText }