import React from 'react'
import styles from './index.module.css'
import { Button as KendoButton, ButtonProps } from "@progress/kendo-react-buttons";


export function Button(props: ButtonProps) {
    return (
        <KendoButton
            className={ styles.btn}
            {...props}
        >
            {props.children}
        </KendoButton>
    )
}