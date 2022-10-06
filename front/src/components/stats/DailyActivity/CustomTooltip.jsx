const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const tooltipStyle = {
            width: "39px",
            height: "63px",
            backgroundColor: "#E60000",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 7,
            outline: "none",
          };
        
      return (
        <div style={tooltipStyle}>
          <p
            className="label"
            style={{ fontSize: "7px" }}
          >{`${payload[0].value}Kg`}</p>
          <p
            className="label"
            style={{ fontSize: "7px" }}
          >{`${payload[1].value}Kcal`}</p>
        </div>
      );
    }
    return null;
  };

  export default CustomTooltip