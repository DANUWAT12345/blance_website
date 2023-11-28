import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function cardHome() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://wallpapers-hub.art/wallpaper-images/508820.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

function Blance_production() {

    const marginStyle = {
        margin: '28px',
        textAlign: 'left',
    }

    return (
        <div>
            <h1 style={marginStyle}>
            See More 
            </h1>
        </div>
    )
}

function GroupExample() {
    return (
        <Container>
            {Blance_production()}
            <Row>
                <Col className="d-flex justify-content-center mb-3" lg={3} md={4}>
                    {cardHome()}
                </Col>
                <Col className="d-flex justify-content-center mb-3" lg={3} md={4}>
                    {cardHome()}
                </Col>
                <Col className="d-flex justify-content-center mb-3" lg={3} md={4}>
                    {cardHome()}
                </Col>
                <Col className="d-flex justify-content-center mb-3" lg={3} md={4}>
                    {cardHome()}
                </Col>
                <Col className="d-flex justify-content-center mb-3" lg={3} md={4}>
                    {cardHome()}
                </Col>
                <Col className="d-flex justify-content-center mb-3" lg={3} md={4}>
                    {cardHome()}
                </Col>
            </Row>
        </Container>
    );
}

export default GroupExample;
