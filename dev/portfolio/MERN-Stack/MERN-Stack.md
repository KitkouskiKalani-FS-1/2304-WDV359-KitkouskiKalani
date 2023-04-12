
# Portfolio 

## Utilizing the MERN Stack (Mongo,Express,React,Node)
This code snippet shows me utilizing mongoose to connect to Mongo, as well as setting up express utilizing Node.

```Javascript
const express = require('express');
require('dotenv').config();
const bodyParser = require("body-parser")
const mongoose = require('mongoose');
const path= require('path');
const cors= require('cors');

const app= express();
app.use(cors());
app.use(bodyParser.json())

const PORT = process.env.PORT || 3001;

const DATABASE_URL = process.env.DATABASE_URL;


mongoose.connect(DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection;
db.on('error', error => console.log(error))
db.once('open', ()=> console.log("Database Connection Established"))

const userRouter = require('./routes/user')
app.use('/user', userRouter)

app.listen(PORT, ()=> {
    console.log(`Server running on ${PORT}`)
})
```
<br>
<br>
This Code snippet shows code I wrote that utilizes the bootstrap library to create a login page using React.

```Javascript
import React, {useState, useEffect} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




export default function Login() {
  return (
    <Container
      className="flex container-fluid justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor:"black" }}>
        <Row>
        <Navbar className="flex" style={styles.nav}>
                <Col className="col-1">
                    <BsSpotify style={styles.icon}/>
                </Col>
            </Navbar>
        </Row>
        <Row style={{marginTop:"200px"}} className="justify-content-center">
            <Col className="col-1">
                <BsSpotify style={styles.lgIcon} size="lg"/> 
            </Col>
                
        </Row>
        <Row className="justify-content-center">
            <Col className="col-3">
                <div style={{fontSize:"24px", display:"inline-block", marginLeft:"75px"}}>Please, Sign In</div>
            </Col>
            
        </Row>
        <Row className="flex justify-content-center">
            <Col className="col-3">
                <a className="btn btn-success btn-lg" style={styles.login} href="http://localhost:3001/login">
                    Sign In
                </a> 
            </Col>
            
        </Row>
    </Container>
  )
}
```




