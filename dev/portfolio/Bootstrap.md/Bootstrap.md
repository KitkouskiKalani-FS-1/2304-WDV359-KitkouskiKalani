## Bootstrap
This code snippet shows my use of Bootstrap specifically within React, this is the use of a Bootstrap navbar modified to fit my specific needs.<br><br>

```Javascript
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../images/Stats_logo.jpeg";

function NavBar() {
  return (
    <Navbar variant="dark" style={{backgroundColor:"#1A2145"}}>
        <Container>
            <Navbar.Brand href="/">
                <img src={Logo} width="80" height="80" style={{borderRadius:"10px"}}/>
            </Navbar.Brand>
            <Nav className="ml-24 ">
            <Nav.Link href="/">Items</Nav.Link>
            <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
            <Nav.Link href="/championlist">Champions</Nav.Link>
            </Nav>
        </Container>
  </Navbar>
  );
}

export default NavBar;
```