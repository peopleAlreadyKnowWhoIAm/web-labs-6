import AuthContext from "data/AuthContext";
import { useFormik, yupToFormErrors } from "formik";
import { useContext } from "react";
import { Col, Container, FloatingLabel, Row , Form, Button} from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Login(){
    const navigate = useNavigate();

    const {checkLogin} = useContext(AuthContext);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().required(),
        }),
        onSubmit: (value) => {
            let check = checkLogin({email: value.email, password: value.password});
            if(check){
                navigate("/", {replace:true});
            } else {
                formik.setFieldError('email','');
                formik.setFieldError('password', '');
            }
        }
    });
    return (<Container as="main">
        <Row className="my-5 py-5 justify-content-center">
            <Col className="py-5 flex-grow-0">
                <h2 className="w-auto text-center mb-5">Log in</h2>
                <FloatingLabel label="Email" className="width-20 my-2">
                    <Form.Control placeholder="Email"   {...formik.getFieldProps("email")} type="email" isInvalid={formik.touched.email && formik.errors.email}/>

                </FloatingLabel>
                <FloatingLabel label="Password" className="width-20 my-2">
                    <Form.Control placeholder="Password"  {...formik.getFieldProps("password")} type="password" isInvalid={formik.touched.password && formik.errors.password}/>
                </FloatingLabel>
                <span>Don't have account? <Link to="/login/sign">Register</Link></span>

                <Button className="width-20 mt-5" onClick={formik.submitForm}>Confirm</Button>
            </Col>
        </Row>
    </Container>);
}