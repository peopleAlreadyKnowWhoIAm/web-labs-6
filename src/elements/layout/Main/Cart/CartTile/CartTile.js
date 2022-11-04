import { removeProduct, updateProduct } from "data/redux/slice";
import AmountInput from "elements/components/AmountInput/AmountInput";
import { useEffect, useState } from "react";
import { CloseButton, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CartTile({ data }) {
    const [amount, setAmount] = useState(data.amount);

    const dispatch = useDispatch();

    const onRemove = () => dispatch(removeProduct({id:data.id}));

    const navigate = useNavigate();

    useEffect(() => {dispatch(updateProduct({ id: data.id, amount: amount }))}, [amount, dispatch])
    return (
        <Row className="border border-primary rounded p-2 flex-basis-0 justify-content-between my-3">
            <Col xs={7} onClick={()=> navigate(`/catalog/${data.id}`)} style={{"cursor": "pointer"}}>
                <img alt={`Product: ${data.product.name}`} src={data.product.imageUrls[0]} style={{ width: "6rem", height: "6rem", objectFit: "cover", boxSizing: "content-box" }} />
                <span className="mx-2 fw-semibold fs-4">
                    {data.product.name}
                </span>
            </Col>
            <Col xs={5} className="d-flex justify-content-between align-items-center">
                <AmountInput state={[amount, setAmount]} range={[1, data.product.amountAvalaible]} />
                <span className="fw-semibold fs-5">{`$${data.product.price * amount}`}</span>
                <CloseButton onClick={onRemove}/>
            </Col>
        </Row>
    );
}