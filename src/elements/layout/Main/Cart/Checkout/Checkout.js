import { clearProducts } from "data/redux/slice";
import { useFormik } from "formik";
import { PhoneNumberUtil } from "google-libphonenumber";
import { Alert, Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import './Checkout.scss';

export default function Checkout() {
    const nav = useNavigate();

    const dispatch = useDispatch();

    const nameRegex = /^[a-zA-z]+$/;
    const addressRegex = /^[\w',-\\/.\s]+$/;
    const phoneUtil = PhoneNumberUtil.getInstance();
    const formik = useFormik({

        initialValues: {
            "first name": '',
            "last name": '',
            email: '',
            "phone number": '',
            address: '',
            description: ''
        },
        validationSchema: Yup.object({
            "first name": Yup.string().matches(nameRegex,"first name contains invalid symbols").min(3).required(),
            "last name": Yup.string().matches(nameRegex, "first name contains invalid symbols").min(2).required(),
            email: Yup.string().email("email must be valid").required(),
            "phone number": Yup.string().test('phone-validation', (val) => {
                let result = false;
                try {
                    result = phoneUtil.isValidNumberForRegion(phoneUtil.parse(val, 'UA'), 'UA')

                } catch (a) { }
                return result;
            }).required(),
            address: Yup.string().matches(addressRegex, "adress contains invalid symbols").min(10).required(),
        }),
        onSubmit: () => {
            dispatch(clearProducts());
            nav("/cart/success");
        }
    });

    let errorText = Object.values(formik.errors).reduce(((prev, val) => prev + val + ', '), '');
    errorText = errorText.charAt(0).toUpperCase() + errorText.substring(1, errorText.length - 2) + '.';

    let rowClasses = "justify-content-center my-3";
    return (
        <Container as={'main'} className="flex-grow-0">
            <h2 className="text-center">Checkout</h2>
            <Row className={rowClasses}>
                <Col className="flex-grow-0">
                    <FloatingLabel label="First name" className="width-20 mb-3">
                        <Form.Control placeholder="First name" {...formik.getFieldProps('first name')} isInvalid={formik.touched["first name"] && formik.errors["first name"]} />

                    </FloatingLabel>
                    <FloatingLabel label="Email" className="width-20">
                        <Form.Control placeholder="Email" {...formik.getFieldProps('email')} isInvalid={formik.touched.email && formik.errors.email} />
                    </FloatingLabel>

                </Col>
                <Col className="flex-grow-0">
                    <FloatingLabel label="Last name" className="width-20 mb-3">
                        <Form.Control placeholder="Last name" {...formik.getFieldProps('last name')} isInvalid={formik.touched["last name"] && formik.errors["last name"]} />
                    </FloatingLabel>
                    <FloatingLabel label="Phone number" className="width-20">
                        <Form.Control placeholder="Phone number" {...formik.getFieldProps('phone number')} isInvalid={formik.touched["phone number"] && formik.errors["phone number"]} />
                    </FloatingLabel>
                </Col>

            </Row>
            <Row className="justify-content-center">
                <Col className="flex-grow-0">
                    <FloatingLabel label="Address" className="width-40 mb-3">
                        <Form.Control placeholder="Adress" {...formik.getFieldProps('address')} isInvalid={formik.touched.address && formik.errors.address} />
                    </FloatingLabel>
                    <FloatingLabel label="Something else we must know (optional)" className="width-40">
                        <Form.Control as={"textarea"} style={{ height: "8rem" }} placeholder="Something else we must know (optional)" {...formik.getFieldProps('description')} />
                    </FloatingLabel>
                </Col>
            </Row>

            <div style={{ height: "10rem" }} className="d-flex align-items-center">

                <Alert variant="danger" className="flex-grow-1" show={!formik.isValid && formik.submitCount !== 0}>{errorText}</Alert>
            </div>

            <Row className="my-4 justify-content-between">
                <Button variant="outline-primary" className="width-12" onClick={() => nav(-1)}>Go back</Button>
                <Button variant="primary" className="width-12" onClick={formik.submitForm}>Continue</Button>
            </Row>
        </Container>
    );
}