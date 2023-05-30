function ItemStatsCard(props) {
    const item = props.itemData;
  
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
          borderRadius: "10px",
        }}
      >
        <div
          style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "50px" }}
        >
          {item.name} Item Stats
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
            <div style={{ fontWeight: "bold", width: "150px", marginRight: "20px" }}>Price:</div>
            <div>{item.price.base}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
            <div style={{ fontWeight: "bold", width: "150px", marginRight: "20px" }}>Sell:</div>
            <div>{item.price.sell}</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ItemStatsCard;
  