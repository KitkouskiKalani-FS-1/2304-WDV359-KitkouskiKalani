import React from 'react';
import Card from 'react-bootstrap/Card';

function ItemCard(props) {
  const itemData = {
    itemName: props.itemName,
    itemIconSrc: props.itemIconSrc,
    itemPlainText: props.itemPlainText,
    itemPrice: props.itemPrice,
    itemDescription: props.itemDescription
  };

  return (
    <a href={`/item/${props.itemIndex}`}>
      <Card className="text-center" style={{ width:'10rem', backgroundColor:"#404EED", padding:"0,10px,10px,  10px"}}>
        <Card.Body style={{backgroundColor:"#404EED"}}>
          <Card.Text style={{color:"white", margin:"auto"}}>
            {props.itemName}
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" width="80" height="140" src={props.itemIconSrc} />
      </Card>
    </a>
  );
}

export default ItemCard;
