import ChampionIcon from "../images/Jaksho_Icon.jpeg";

function ChampionInfoCard() {
    return (
        <div style={{ 
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-evenly',
            width: '600px',
            height: '200px',
            backgroundColor: '#404EED',
            color: '#FFFFFF',
            padding: '20px',
            borderRadius: '10px'
        }}>
          <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
          }}>
            <img 
              src={ChampionIcon} 
              alt="square image" 
              style={{ 
                  width: '100px',
                  height: '100px',
                  objectFit: 'contain',
                  margin: '5px'
              }} 
            />
            <div style={{ fontWeight: 'bold' }}>Jaksho the Protean</div>
          </div>
          <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginLeft: '10px'
          }}>
            <div style={{ fontWeight: 'bold', color:'#1A2145' }}>Item Type</div>
            <div style={{ color: '#FFFFFF'}}>Legendary</div>
          </div>
        </div>
      );
  }
  
  export default ChampionInfoCard;

