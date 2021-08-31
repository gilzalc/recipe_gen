import React, {useRef, useState} from 'react'
import "../styles/styles.css"

import {Button, Form, Alert} from "react-bootstrap";
import {useAuth} from "../contexts/AuthContext";

export default function ForgotGroupcode({setForgotCode}) {
    const emailRef = useRef();
    const passRef = useRef();
    const {loginWithEmail, ForceFetchData} = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await loginWithEmail(emailRef.current.value, passRef.current.value);
            setForgotCode(false);
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
                        placeholder="Email"
                        ref={emailRef}
                    />
                </Form.Group>
                <Form.Group id="password">
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        ref={passRef}
                        required
                    />

                </Form.Group>
                <Button disabled={loading} variant="success" type="submit">
                    Start making memories
                </Button>
                <Form.Text className="text-muted">
                    Remember your Family Code?
                    <Button variant="link" size="sm" onClick={() => setForgotCode(false)}>
                        Enter with code
                    </Button>
                </Form.Text>
            </Form>
        </div>
    );
}
