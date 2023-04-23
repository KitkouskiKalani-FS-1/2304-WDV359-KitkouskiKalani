import React from 'react';
import NavBar from '../components/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Logo from '../images/Stats_logo.jpeg';
import ChampionCard from '../components/ChampionCard';
import ChampionInfoCard from '../components/ChampionInfoCard';

function ChampionListPage() {
  return (
    <Container style={{backgroundColor:"#1A2145", color:"white", height:"100vh"}} fluid>
      <Row>
        <Col>
          <NavBar/>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mt-10">
          <h1>Search by Champion</h1>
        </Col>
      </Row>
      <Row className="mt-5 justify-content-center">
        <Col className="col-6">
          <Form>
            <Form.Group className="mb-3" controlId="formItemSearch">
            <Form.Control style={{borderRadius:"20px", height:"50px"}} type="text" placeholder="Champion Name" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <ChampionCard/>
          <ChampionInfoCard/>
        </Col>
      </Row>
    </Container>
  );
}

export default ChampionListPage;
