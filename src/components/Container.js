import React from 'react'

const Container = ({ fluid = false, children }) => (
    <div className={ fluid ? 'container-fluid' : 'container' }>
        { children}
    </div>
)

export default Container