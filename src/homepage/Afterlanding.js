import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Afterlanding() {

  const marginStyle = {
    margin: '20px', // Adjust the value based on your requirements
  }

  const justifyTextStyle = {
    textAlign: 'justify',
  };

  const leftAlignStyle = {
    textAlign: 'left',
  };

  const colStyle = {
    marginBottom: '10px', // Adjust the margin-bottom value based on your requirements
  };

  const about_text = `Interior Architects 49 Limited 
  (IA49) was founded in 1992 by Nithi Sthapitanonda and Architects 49 Limited (A49). Initially an Interior Architecture Department under A49, we were created in response to our clients’ demands for architecture that is not only aesthetically pleasing and functionally sound, but also well-integrated between the interior and the exterior. Established as a separate company in 1998, the experience and expertise gained from working closely with architects and engineers enables our company to foresee any problem that may occur in dealing with architecture, structure, and service systems engineering. We have always been, and continue to be, trusted by clients to provide interior design services 
  for buildings designed by Architects 49 Limited as well as other firms.`;

  return (
    <Container>
      <Row style={marginStyle}>
        <Col></Col>
        <Col xl={12} style={justifyTextStyle} >
          <h1>Interior Architects</h1>
          {about_text}
          </Col>
        <Col></Col>
      </Row>
      <Row style={marginStyle}>
        <Col></Col>
        <Col xl={12} style={justifyTextStyle} >
          <h1>Interior Architects</h1>
          {about_text}
          </Col>
        <Col></Col>
      </Row>
      <Row style={marginStyle}>
        <Col></Col>
        <Col xl={12} style={justifyTextStyle} >
          <h1>Interior Architects</h1>
          {about_text}
          </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Afterlanding;
