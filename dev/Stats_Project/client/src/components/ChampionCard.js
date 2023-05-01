import Card from 'react-bootstrap/Card';
import ChampionIcon from "../images/Aatrox_Icon.jpeg";

function ChampionCard() {
    return (
      <a href='/champion/aatrox'>
        <Card className="text-center" style={{ width:'10rem', backgroundColor:"#404EED", padding:"0,10px,10px,  10px"}}>
          <Card.Body style={{backgroundColor:"#404EED"}}>
            <Card.Text style={{color:"white", margin:"auto"}}>
              Aatrox
            </Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" width="80" height="140" src={ChampionIcon} />
        </Card>
      </a>
    );
  }
  
  export default ChampionCard;