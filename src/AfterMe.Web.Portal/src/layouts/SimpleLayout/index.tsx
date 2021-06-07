import React from 'react'
import styles from './index.module.css'

export interface SimpleLayourProps {
    children: React.ReactNode
}

function SimpleLayout({ children }: SimpleLayourProps) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default SimpleLayout