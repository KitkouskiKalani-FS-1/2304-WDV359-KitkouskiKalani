import React from 'react';
import NavBar from '../components/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Logo from '../images/Stats_logo.jpeg';

function SearchItemPage() {
  return (
    <Container style={{backgroundColor:"#1A2145", color:"white", height:"100vh"}} fluid>
      <Row>
        <Col>
          <NavBar/>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <img src={Logo} width="200" height="200" style={{borderRadius:"10px"}}/>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mt-10">
          <h1>Look up an item and get valuable details</h1>
        </Col>
      </Row>
      <Row className="mt-5 justify-content-center">
        <Col className="col-6">
          <Form>
            <Form.Group className="mb-3" controlId="formItemSearch">
            <Form.Control style={{borderRadius:"20px", height:"50px"}} type="text" placeholder="Search Item Name" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchItemPage;