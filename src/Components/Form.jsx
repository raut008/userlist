import { autocompleteClasses } from '@mui/material';
import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
const Form = ({ isUserLoggedIn }) => {
    const validCredential = {
        userName: "foo",
        password: "bar"
    }

    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleUserName = (event) => {
        setUserName(event.currentTarget.value);
    }

    const handlePassword = (event) => {
        setPassword(event.currentTarget.value);
    }

    const validate = () => {
        if (userName === validCredential.userName && password === validCredential.password) {
            isUserLoggedIn(true);
        } else {
            isUserLoggedIn(false);
        }
    }
    return (
        <div className="row col-6 mt-5 pt-5" style={{ margin: "auto" }}>
            <h6>Username: foo | Password: bar</h6>
            <InputGroup className="my-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={userName}
                    onChange={handleUserName}
                />
            </InputGroup>
            <InputGroup className="my-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <FormControl
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    value={password}
                    onChange={handlePassword}
                />
            </InputGroup>
            <div className="mt-3">
                <Button variant="primary" onClick={validate}>Login</Button>
            </div>
        </div>
    )
}

export default Form
