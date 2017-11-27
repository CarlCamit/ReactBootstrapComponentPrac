import React from 'react'

const Container = ({ fluid, children }) => (
    <div className={ fluid ? 'container-fluid' : 'container' }>
        { children}
    </div>
)

export default Container