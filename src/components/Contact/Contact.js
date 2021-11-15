import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <div className="contact">
          <div className="row container m-auto">
            <div className="col-md-6">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
               
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              
                <Button variant="primary" >
                  Submit
                </Button>
            </Form>
            </div>
            <div className="col-md-6">
              <div className="login-img">
                <img
                  className="w-100"
                  src="http://wow.uscgaux.info/Uploads_wowII/P-DEPT/images/Contact_Us.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


