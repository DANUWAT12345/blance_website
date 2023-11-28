import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FluidExample() {
    const imageStyle = {
        height: '450px', // Set your desired height
        objectFit: 'cover', // Optional: maintain aspect ratio and cover the container
        marginTop: '15px', // Set your desired left margin
    };

    return (
        <Container>
            <Row>
                <Col lg='6' xl='8'>
                    <Image src="https://www.a49.com/uploads/sub49_projects/564/gallery_1317_20190705043532.jpg"
                        fluid style={imageStyle} />
                </Col>
                <Col lg='6' xl='4'>
                    <Image src="https://en.idei.club/uploads/posts/2023-03/1678775756_en-idei-club-p-modern-luxury-living-room-interer-1.jpg"
                        fluid style={imageStyle} />
                </Col>
            </Row>
            <Row>
                <Col lg='4' xl='4'>
                    <Image src="https://cdna.artstation.com/p/assets/images/images/067/944/320/4k/mokhtar-saber-abdo-4.jpg?1696597527" 
                    fluid style={imageStyle} />
                    </Col>
                <Col lg='4' xl='4'>
                    <Image src="https://www.a49.com/uploads/sub49_projects/562/gallery_7423_20190705031717.jpg" 
                    fluid style={imageStyle} />
                    </Col>
                <Col lg='4' xl='4'>
                    <Image src="https://www.a49.com/uploads/sub49_projects/772/gallery_1257_20210602095956.jpg" 
                    fluid style={imageStyle} />
                    </Col>
            </Row>
            <Row>
                <Col lg='6' xl='3'>
                    <Image src="https://www.a49.com/uploads/sub49_projects/772/gallery_1257_20210602095956.jpg" 
                    fluid style={imageStyle} />
                    </Col>
                <Col lg='6' xl='9'>
                    <Image src="https://www.a49.com/uploads/sub49_projects/564/gallery_1317_20190705043532.jpg" 
                    fluid style={imageStyle} />
                    </Col>
            </Row>
        </Container>
    );
}

export default FluidExample;
