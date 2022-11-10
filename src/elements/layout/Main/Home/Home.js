
import 'bootstrap/dist/css/bootstrap.min.css';
import DataContext from 'data/Context';
import { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import TileCard from './TileCard/TileCard';

import MainImage from './image.png';
import ProductCard from '../Catalog/Products/ProductCard/ProductCard';

function Home(props) {
    const products = useContext(DataContext).value;
    const [rows, setRows] = useState([] );
    const navigate = useNavigate();

    useEffect(loadMore, []);

    function loadMore() {
        if (products.length <= rows.length || rows.length > 12) {
            navigate("/catalog");
        } else {
            let mrows = products.slice(0, 3 + rows.length);
            setRows(mrows);
        }
    }


    return (
        <Container as="main">
            <Row className='justify-content-stretch my-5 pb-5'>
                <Col lg={4}>                   <Image src={MainImage} alt='Img1' rounded fluid /></Col>
                <Col lg={8} className='d-flex flex-column px-5 py-2 justify-content-center'>
                    <h1>D-store is the store of electric decoration of your dream</h1>
                    <p className='fs-5'>
                        We help you to decorate your house as well as you could imagine.
                    </p>
                </Col>
            </Row>
            <h3 className='text-center'>Most popular</h3>
            <Row className='flex-wrap justify-content-between'>
            {rows.map((val=><TileCard data={val} key={val.id}/>))}
            </Row>
                
            <Row className='justify-content-center mb-5'>
                <Button variant='primary' size='lg' className='w-auto px-5' onClick={loadMore}>
                    View More
                </Button>
            </Row>
        </Container>
    );
}

export default Home;