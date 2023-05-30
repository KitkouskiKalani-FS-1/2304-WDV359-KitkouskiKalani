import React from 'react';
import NavBar from '../components/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Logo from '../images/Stats_logo.jpeg';
import ChampionCard from '../components/ChampionCard';
import { apiData } from '../apiData/apiData';

function ChampionListPage() {
  return (
    <Container style={{ backgroundColor:"#1A2145", color:"white", minHeight:"100vh" }} fluid>
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <img src={Logo} width="200" height="200" style={{borderRadius:"10px"}}/>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mt-10">
          <h1>All Champions</h1>
        </Col>
      </Row>
      <Row className="mt-5 justify-content-center">
        <Col className="col-6">
        </Col>
      </Row>
      <Row >
        {apiData.map((champion, index) => (
          <Col md="2" className="my-3" key={index}>
            <ChampionCard championName={champion.name} championIconSrc={champion.icon} championTags={champion.tags} championStats={champion.stats} championDescription={champion.description} championIndex={index}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ChampionListPage;
