import React from 'react'

export interface SimpleLayourProps {
    children: React.ReactNode
}

function SimpleLayout({ children }: SimpleLayourProps) {
    return (
        <>
            hellow from simple layout
            {children}
        </>
    )
}

export default SimpleLayout