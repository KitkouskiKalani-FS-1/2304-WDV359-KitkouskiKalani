import React from 'react';
import NavBar from '../components/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Logo from '../images/Stats_logo.jpeg';
import LeaderboardPlayerCard from '../components/LeaderboardPlayerCard';

function LeaderboardPage() {
  return (
    <Container style={{backgroundColor:"#1A2145", color:"white", height:"100vh"}} fluid>
      <Row>
        <Col>
          <NavBar/>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mt-10">
          <h1>Leaderboard</h1>
        </Col>
      </Row>
      <Row className="mt-5 justify-content-center align-items-center">
        <Col className="col-6 text-center">
            <LeaderboardPlayerCard/>
        </Col>
      </Row>
      <Row className="mt-5 justify-content-center align-items-center">
        <Col className="col-6 text-center">
            <LeaderboardPlayerCard/>
        </Col>
      </Row>
      <Row className="mt-5 justify-content-center align-items-center">
        <Col className="col-6 text-center">
            <LeaderboardPlayerCard/>
        </Col>
      </Row>
      <Row className="mt-5 justify-content-center align-items-center">
        <Col className="col-6 text-center">
            <LeaderboardPlayerCard/>
        </Col>
      </Row>
    </Container>
  );
}

export default LeaderboardPage;