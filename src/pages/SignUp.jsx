import React, { useRef, useState } from "react";
import {useAuth} from "../contexts/AuthContext";
import { Button, Form, Alert } from "react-bootstrap";

export default function SignUp({ setShowSignUp }) {
    const emailRef = useRef();
    const passRef = useRef();
    const passwordConfRef = useRef();
    const familyNameRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        if (passRef.current.value !== passwordConfRef.current.value) {
            return setError("Passwords do not match");
        }

        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passRef.current.value, familyNameRef.current.value);
            setShowSignUp(false);
        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
    }

    return (
        <div id="signup">
            <h2>
               It's the recipes that make the memories <br /> keep them both in one place
            </h2>
            <br/>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="family-name">
                    <Form.Control
                        type="text"
                        placeholder="Family Name"
                        ref={familyNameRef}
                        required
                    />
                </Form.Group>
                <Form.Group id="email">
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        ref={emailRef}
                        required
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
                <Form.Group id="password-confirm">
                    <Form.Control
                        type="password"
                        placeholder="Password Confirmation"
                        ref={passwordConfRef}
                        required
                    />
                </Form.Group>
                <Button disabled={loading} variant="success" type="submit">
                    Create a collection
                </Button>
            </Form>
                <br/>
            <Form.Text className="text-muted">
                Already have a collection?
                <Button variant="link" size="sm" onClick={() => setShowSignUp(false)}>
                    Enter with Family Code
                </Button>
            </Form.Text>
        </div>
    );
}
