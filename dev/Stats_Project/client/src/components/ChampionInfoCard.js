function ChampionInfoCard(props) {
    let champion= props.championData;
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
              src={champion.icon} 
              alt="square image" 
              style={{ 
                  width: '100px',
                  height: '100px',
                  objectFit: 'contain',
                  margin: '5px'
              }} 
            />
            <div style={{ fontWeight: 'bold' }}>{champion.name}</div>
            <div style={{ color:'#1A2145' }}>{champion.title}</div>
          </div>
          <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginLeft: '10px'
          }}>
            <div style={{ fontWeight: 'bold', color:'#1A2145' }}>Summoner Type</div>
            <div style={{ color: '#FFFFFF'}}>{champion.tags[0]}</div>
          </div>
        </div>
      );
  }
  
  export default ChampionInfoCard;

