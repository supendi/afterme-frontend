import React from 'react'
import styles from './index.module.css'

function SignInPage() {
    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <h1 className={styles.title}>AfterMe</h1>
            </div>

            <div className={styles.rightContainer}>

                <div>
                    <h3>Sign in</h3>
                    <input
                        type="text"
                        placeholder="Email Address"
                        className={styles.inputSearch}
                    >
                    </input>
                </div>
            </div>
        </div>
    )
}


export default SignInPage