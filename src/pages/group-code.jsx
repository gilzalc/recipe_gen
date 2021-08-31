import React, {useRef, useState} from 'react'
import "../styles/styles.css"

import {Button, Form, Alert} from "react-bootstrap";
import {useAuth} from "../contexts/AuthContext";

export default function GroupCode({setShowSignUp, setForgotCode}) {
    const groupcodeRef = useRef();
    const {login, ForceFetchData} = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await login(groupcodeRef.current.value);
            ForceFetchData();
        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
    }

    return (
        <div id="group-code">
            <h2>
                Food brings the family together<br /> Connect to collect
            </h2>
            <br/>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        type="text"
                        placeholder="Family Code"
                        ref={groupcodeRef}
                    />
                </Form.Group>

                <Button disabled={loading} variant="success" type="submit">
                    Start making memories
                </Button>
                <Form.Text className="text-muted">
                    Don't have a Family Code?
                    <Button variant="link" size="sm" onClick={() => setShowSignUp(true)}>
                        Create a new collection
                    </Button>
                </Form.Text>
                <Form.Text className="text-muted">
                    Forgot your Family Code?
                    <Button variant="link" size="sm" onClick={() => setForgotCode(true)}>
                        Login with email and password
                    </Button>
                </Form.Text>
            </Form>
        </div>
    );
}
