import React from 'react';
import NavBar from '../components/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Logo from '../images/Stats_logo.jpeg';
import ItemCard from '../components/ItemCard';
import LeaderboardPlayerCard from '../components/LeaderboardPlayerCard';
import { apiDataItems } from '../apiData/apiDataItems';


function SearchItemPage() {
  return (
    <Container style={{backgroundColor:"#1A2145", color:"white", minHeight:"100vh"}} fluid>
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
          <h1>Look for an item and get valuable details</h1>
        </Col>
      </Row>
      <Row className="mt-5 justify-content-center">
      </Row>
      <Row >
        {apiDataItems.map((item, index) => (
          <Col md="2" className="my-3" key={index}>
            <ItemCard itemName={item.name} itemIconSrc={item.icon} itemPlainText={item.plaintext} itemPrice={item.price} itemDescription={item.description} itemIndex={index}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SearchItemPage;