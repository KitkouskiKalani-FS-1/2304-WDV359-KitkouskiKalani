import ChallengerIcon from "../images/Challenger_icon.jpeg";

function LeaderboardPlayerCard() {
    return (
        <div
            style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "600px",
            height: "100px",
            backgroundColor: "#404EED",
            color: "#FFFFFF",
            padding: "20px",
            borderRadius: "10px",
            }}>
            <div style={{ display: "flex", alignItems: "center", fontSize: "30px" }}>1</div>
            <div style={{ display: "flex", alignItems: "center", fontSize: "20px" }}>Agurin</div>
            <div style={{ display: "flex", alignItems: "center" }}>
            <img  style={{ 
                width: '50px',
                height: '50px',
                objectFit: 'cover',
                borderRadius: '50%',
                margin: '0 10px'}}   
                src={ChallengerIcon} 
                alt="Challenger Icon" />
            </div>
            <div style={{ display: "flex", alignItems: "center", fontSize: "20px" }}>1324 LP</div>
        </div>
    );
}
  
  export default LeaderboardPlayerCard;