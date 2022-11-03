import AuthContext from "data/AuthContext";
import { useFormik } from "formik";
import { useContext } from "react";
import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Yup from "yup";


export default function Sign() {
    const { registerUser } = useContext(AuthContext);


    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            passwordCopy: ""
        },
        validationSchema: Yup.object({
            username: Yup.string().min(3).required(),
            email: Yup.string().email().required(),
            password: Yup.string().min(8).required(),
            passwordCopy: Yup.string().oneOf([Yup.ref("password"), null]).required(),
        }),
        onSubmit: (values) => {
            registerUser({ username: values.username, email: values.email, password: values.password });
        }
    });
    return (<Container as="main">
        <Row className="my-5 py-5 justify-content-center">
            <Col className="py-5 flex-grow-0">
                <h2 className="w-auto text-center mb-5">Register</h2>
                <FloatingLabel label="Username" className="width-20 my-2">
                    <Form.Control placeholder="Username"   {...formik.getFieldProps("username")} isInvalid={formik.touched.username && formik.errors.username} />
                </FloatingLabel>
                <FloatingLabel label="Email" className="width-20 my-2">
                    <Form.Control placeholder="Email"   {...formik.getFieldProps("email")} type="email" isInvalid={formik.touched.email && formik.errors.email} />
                </FloatingLabel>
                <FloatingLabel label="Password" className="width-20 my-2">
                    <Form.Control placeholder="Password"  {...formik.getFieldProps("password")} type="password" isInvalid={formik.touched.password && formik.errors.password} />
                </FloatingLabel>
                <FloatingLabel label="Repeat password" className="width-20 my-2">
                    <Form.Control placeholder="Repeat password"  {...formik.getFieldProps("passwordCopy")} type="password" isInvalid={formik.touched.passwordCopy && formik.errors.passwordCopy} />
                </FloatingLabel>
                <span>Have account? <Link to="/login">Login</Link></span>

                <Button className="width-20 mt-5" onClick={formik.submitForm}>Register</Button>
            </Col>
        </Row>
    </Container>);
}