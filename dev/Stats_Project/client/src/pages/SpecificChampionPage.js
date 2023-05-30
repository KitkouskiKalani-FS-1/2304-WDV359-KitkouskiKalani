import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ChampionInfoCard from '../components/ChampionInfoCard';
import ChampionStatsCard from '../components/ChampionStatsCard';
import { apiData } from '../apiData/apiData';

function SpecificChampionPage() {
  const { id } = useParams();
  const championData = apiData[id];
  return (
    <Container style={{backgroundColor:"#1A2145", color:"white", height:"100vh"}} fluid>
      <Row>
        <Col>
          <NavBar/>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mt-10">
          <div className="d-flex flex-column align-items-center">
            <ChampionInfoCard championData={championData} />
            <br></br>
            <ChampionStatsCard championData={championData} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SpecificChampionPage;
