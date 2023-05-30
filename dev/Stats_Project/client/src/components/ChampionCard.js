import React from 'react';
import Card from 'react-bootstrap/Card';

function ChampionCard(props) {
  const championData = {
    championName: props.championName,
    championIconSrc: props.championIconSrc,
    championTags: props.championTags,
    championStats: props.championStats,
    championDescription: props.championDescription
  };

  return (
    <a href={`/champion/${props.championIndex}`}>
      <Card className="text-center" style={{ width:'10rem', backgroundColor:"#404EED", padding:"0,10px,10px,  10px"}}>
        <Card.Body style={{backgroundColor:"#404EED"}}>
          <Card.Text style={{color:"white", margin:"auto"}}>
            {props.championName}
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" width="80" height="140" src={props.championIconSrc} />
      </Card>
    </a>
  );
}

export default ChampionCard;
