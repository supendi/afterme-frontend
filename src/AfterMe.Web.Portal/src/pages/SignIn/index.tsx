import React from 'react'
import '@scss/layout/login.scss'
import { Input } from '@progress/kendo-react-inputs'

function SignInPage() {
    return (
        <div className={"Login"}>
            <div className={"Login-left"}>
                <h1>After Me</h1>
            </div>
            <div className={"Login-right"}>
                <div>
                    <h3>Sign in</h3>
                    <div>
                        <Input
                            type="text"
                            placeholder="Email Address"
                        >
                        </Input>
                    </div>
                    <div>
                        <Input
                            type="text"
                            placeholder="Password"
                        >
                        </Input>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SignInPage