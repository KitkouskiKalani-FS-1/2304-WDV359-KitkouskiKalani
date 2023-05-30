function ChampionStatsCard(props) {
    const champion = props.championData;
  
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "600px",
          minHeight: "200px",
          backgroundColor: "#404EED",
          color: "#FFFFFF",
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "50px" }}>
          {champion.name} Champion Stats
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
            <div style={{ fontWeight: "bold", width: "150px", marginRight: "20px" }}>Health:</div>
            <div>{champion.stats.hp}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
            <div style={{ fontWeight: "bold", width: "150px", marginRight: "20px" }}>Mana:</div>
            <div>{champion.stats.mp}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
            <div style={{ fontWeight: "bold", width: "150px", marginRight: "20px" }}>Movement Speed:</div>
            <div>{champion.stats.movespeed}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
            <div style={{ fontWeight: "bold", width: "150px", marginRight: "20px" }}>HP Regen:</div>
            <div>{champion.stats.hpregen}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
            <div style={{ fontWeight: "bold", width: "150px", marginRight: "20px" }}>Mana Regen:</div>
            <div>{champion.stats.mpregen}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
            <div style={{ fontWeight: "bold", width: "150px", marginRight: "20px" }}>Attack Damage:</div>
            <div>{champion.stats.attackdamage}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
            <div style={{ fontWeight: "bold", width: "150px", marginRight: "20px" }}>Attack Speed:</div>
            <div>{champion.stats.attackspeed}</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ChampionStatsCard;
  