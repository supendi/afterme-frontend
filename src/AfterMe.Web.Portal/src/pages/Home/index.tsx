import React from 'react'
import styles from './index.module.css'

function HomePage() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>The AfterMe Network</h1>
                    <p className={styles.subtitle}>Leave message for loved ones once you've passed away </p>
                </div>
                <div className={styles.buttonContainer}>
                    <button>Sign Up Free</button>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.card}>
                    <h3>The AfterMe Network</h3>
                    <input
                        type="text"
                        placeholder="Search"
                        className={styles.inputSearch}
                    >
                    </input>
                </div>
            </div>

            <div className={styles.footer}>

            </div>

        </div>
    )
}


export default HomePage