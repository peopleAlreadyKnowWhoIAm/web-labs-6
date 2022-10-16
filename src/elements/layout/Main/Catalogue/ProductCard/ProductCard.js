import { Button, Card } from "react-bootstrap";

import './ProductCard.scss'

function ProductCard() {
    return (
        <Card border="primary" className="productCard m-2">

            <Card.Img variant="top" src="/dec-img1.jpg" className='rounded' />
            <Card.Title className="text-center">Blas als a</Card.Title>
            <Card.Text as='div'>
                <TextWithGap start="Length:" end="32 meters" />
                <TextWithGap start="Colors:" end="32 meters" />
                <TextWithGap start="Power:" end="32 meters" />
                <TextWithGap className="fw-bolder" start="Price:" end="$32.00" />
            </Card.Text>
            <div className="flex-grow-1" />
            <Button variant="primary" className="mb-2">View More</Button>
        </Card>
    );
}

function TextWithGap({ start, end, className = "" }) {
    className += " d-flex justify-content-between flex-basis-0";
    return (
        <p className={className}>
            <div>{start}</div>
            <div>{end}</div>
        </p>
    );
}


export default ProductCard;