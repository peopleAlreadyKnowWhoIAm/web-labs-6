import { Card } from "react-bootstrap";

import "./TileCard.scss"

function TileCard(props) {
    return <Card className="tile-card p-0 border-0">
        <Card.Img variant="top" src={props.src} className='rounded'/>
        <Card.Title>{props.header}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
    </Card>
}

export default TileCard;