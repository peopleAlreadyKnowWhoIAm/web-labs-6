import DataContext from "data/Context";
import { addProduct, checkPresenseOnCart } from "data/redux/slice";
import NumInput from "elements/components/FormColumn/NumInput/NumInput";
import TextWithGap from "elements/components/TextWithGap/TextWithGap";
import { useContext, useEffect, useMemo, useState } from "react";
import { Col, Row, Carousel, Container, Button, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";

import './ItemPage.scss';

export default function ItemPage() {
    const id = useLoaderData();
    const { loadAllById } = useContext(DataContext);
    const nav = useNavigate();
    const dispather = useDispatch();
    const [dec, setdec] = useState(undefined);
    const [inCartText, setInCartText] = useState("In cart");
    const [amount, setAmount] = useState(undefined);
    const [errorCss, setErrorCss] = useState("invisible");

    let inCart = useSelector(checkPresenseOnCart(id));

    const load = () => {
        loadAllById(id).then((val) => {
            setdec(val);
        })
    };
    useEffect(load, [id, loadAllById]);


    const onMouseEnter = () => setInCartText("Go to cart");
    const onMouseLeave = () => setInCartText("In cart");

    const goToCart = () => nav("/cart");
    const addToCart = () => {
        if(amount) {
            setErrorCss("invisible");
            dispather(addProduct(dec, amount));
        } else {
            setErrorCss("");
        }

    }

    let classesForGap = "border-dotted mx-4";
    return (
        <Container className="my-2">
            {(!dec)
                ? <Col className='d-flex justify-content-center'><Spinner animation='border' /></Col>
                : <><Row className="mb-5">
                    <Col>
                        <Carousel slide={false}>
                            {dec.imageUrls.map((val, index) => <Carousel.Item key={index}>
                                <img alt={`${index}`} src={val} className="d-block w-100" style={{ objectFit: "cover", height: 500 }} />
                            </Carousel.Item>)}
                        </Carousel>
                    </Col>
                    <Col className="d-flex flex-column">
                        <h1>{dec.name}</h1>
                        <p>
                            {dec.description}
                        </p>
                        <div className="flex-grow-1" />
                        <NumInput label={`Amount(max: ${dec.amountAvalaible})`} state={[amount, setAmount]} range={[1, dec.amountAvalaible]} />
                    </Col>
                </Row>
                    <h4 className="text-center text-secondary">Characteristics</h4>
                    <Row className="mb-4">
                        <Col className="me-5">
                            <TextWithGap start={"Name"} end={dec.name} classesForGap={classesForGap} />
                            <TextWithGap start={"Colors"} end={dec.colors} classesForGap={classesForGap} />
                        </Col>
                        <Col>
                            <TextWithGap start={"Length"} end={`${dec.length} cm`} classesForGap={classesForGap} />
                            <TextWithGap start={"Power"} end={`${dec.name} watts`} classesForGap={classesForGap} />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col className="d-flex align-items-center">
                            <span className="fw-semibold fs-5">{`Price: $ ${dec.price}`}</span>
                        </Col>

                        <Col className="d-flex justify-content-end">
                            <Button variant="outline-primary width-form me-4" onClick={() => nav(-1)}>Go back</Button>
                            {(inCart) ?
                                <Button variant="success" className="width-form" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={goToCart}>{inCartText}</Button>
                                :
                                <Button variant="primary width-form" onClick={addToCart}>Add to cart</Button>
                            }
                        </Col>

                    </Row></>
            }
            
            {
                <Alert variant="danger" className={errorCss}>The amount must be specified!</Alert>
            }
        </Container>
    );
}