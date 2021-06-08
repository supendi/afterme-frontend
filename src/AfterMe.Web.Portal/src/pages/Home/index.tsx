import React from 'react'
import styles from './index.module.css'
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody
} from "@progress/kendo-react-layout";
import { Button } from "@components/Button";

function HomePage() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>The AfterMe Network</h1>
                    <p className={styles.subtitle}>Leave message for loved ones once you've passed away </p>
                </div>
                <div className={styles.buttonContainer}>
                    <Button
                        className={styles.btn}
                        primary={true}
                    >
                        Sign Up Free
                    </Button>
                </div>
            </div>

            <div className={styles.content}>
                <Card className={styles.card}>
                    <CardHeader>
                        <CardTitle className={styles.cardTitle}>
                            The AfterMe Networks
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <input
                            type="text"
                            placeholder="Search"
                            className={styles.inputSearch}
                        >
                        </input>
                    </CardBody>

                </Card>
            </div>

            <div className={styles.footer}>

            </div>

        </div>
    )
}


export default HomePage