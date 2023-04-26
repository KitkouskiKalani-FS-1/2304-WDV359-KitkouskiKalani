function ChampionStatsCard() {
    return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "600px",
            height: "200px",
            backgroundColor: "#404EED",
            color: "#FFFFFF",
            padding: "20px",
            borderRadius: "10px"}}>
          <div style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "50px" }}>
            Jak'sho Item Stats
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ fontWeight: "bold", marginRight: "100px" }}>Stats:</div>
            <div style={{ fontWeight: "bold" }}>Value:</div>
          </div>
        </div>
    );
}
  
  export default ChampionStatsCard;