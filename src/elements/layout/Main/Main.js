
import 'bootstrap/dist/css/bootstrap.min.css';
import TileCard from 'elements/components/TileCard/TileCard';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';

import MainImage from './image.png';

const listOfTyleObjects = [
    {
        header: "FLYNGO 10 Diya 138 LED Curtain",
        text:  "Perfect to decorate your house, room, garden, tree,.6.6Ft x 3.3Ft star curtain string lights with 138 LEDs, power line length is 5.3Ft. For christmas, diwali, wedding ceremony, valentine's day, birthday party and other festivals or celebrations at home, restaurant, hotel, commercial building.", 
        src: "/dec-img3.jpg"
    },
    {
        header:"X4Cart Blossom Flower Fairy String Lights",
        text: "Blossom Flower String lights are composed of Ultra Bright Colour Micro LEDs that don't overheat giving a light fairy effect. After hours of use, they are completely safe to touch without risk of burns. The LED Starry Lights are safe for children and pets. Perfect for spicing-up your decor or creating a romantic setting.",
        src: "/dec-img2.jpg"
    },
    {
        header: "Gesto 35 Feet Long Led Power Pixel Light",
        text: "Easy to use with an electric plug, enjoy the hassle-free application of the string Moroccan light. These can be lightened up during Diwali, Christmas, Birthdays, and other festivities & events.",
        src: "/dec-img1.jpg"
    }
];

function Main(props) {
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
            <Row className='mt-5 pt-5 justify-content-around'>
                <TileCard {...(listOfTyleObjects[0])}/>
                <TileCard {...(listOfTyleObjects[1])}/>
                <TileCard {...(listOfTyleObjects[2])}/>
            </Row>
            
            <Row className='justify-content-center mb-5'>
                <Button variant='dark' size='lg' className='w-auto px-5'>
                    View More
                </Button>
                </Row>
        </Container>
    );
}

export default Main;