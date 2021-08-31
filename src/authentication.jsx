
import React, { useState, useEffect } from "react";
//
// // Import and apply CSS stylesheet
// import "../styles/styles.css";
//
// // Import bootstrap styles
// import "bootstrap/dist/css/bootstrap.min.css";

import {
    Button,
    Form,
    FormGroup,
    InputGroup,
    FormControl
} from "react-bootstrap";

export default function Authentication() {
    return (
        <div id="container">
            <GroupCode />
            <SignUp />
        </div>
    );
}

function GroupCode() {
    return (
        <div id="group-code">
            <h2>
                Get cooking
                <br />
                and connecting
            </h2>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    {/* <Form.Label>Please enter your group code</Form.Label> */}
                    <Form.Control type="text" placeholder="Enter group code" />
                    <Form.Text className="text-muted">
                        if you don't have a group code, you might need to sign up &#10140;
                    </Form.Text>
                </Form.Group>
            </Form>
            <Button variant="success">Enter</Button>
        </div>
    );
}

function SignUp() {
    return (
        <div id="signup">
            <h2>
                Start collecting <br /> family memories
            </h2>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    {/*<Form.Label></Form.Label> */}
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form>
            <Button variant="success">Sign Up</Button>
            already have an account? Sign in or enter group code
            {/*<Button variant="link" size="sm" inline>
        Sign in
      </Button>{" "} or */}
        </div>
    );
}

// don't forget to add credit - <a href='https://www.freepik.com/photos/food'>Food photo created by azerbaijan_stockers - www.freepik.com</a>
