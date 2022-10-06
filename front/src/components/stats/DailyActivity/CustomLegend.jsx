const CustomLegend = (props) => {
  const { payload } = props;
  const BulletStyle = (entry) => {
    return {
      width: 8,
      height: 8,
      borderRadius: 10,
      backgroundColor: entry.color,
    };
  };
  const ListStyle = {
    display: "flex",
    alignItems: "center",
    gap: "32px"
  };
  const ListElementStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontWeight: "500",
    fontSize: "14px"
  };
  const ContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "calc(100% + 10px )",
    marginBottom:"50px",
    paddingLeft:"30px"
  }

  return (
    <div style={ContainerStyle}>
    <p style={{fontWeight: "500",fontSize: "15px"}}>Activité quotidienne</p>
    <ul style={ListStyle}>
      {payload.map((entry, index) => (
        <li key={`item-${index}`} style={ListElementStyle}>
          <div style={BulletStyle(entry)}></div>
          {entry.value == "kilogram" ? "Poids (kg)" : "Calories brûlées (kCal)"}
        </li>
      ))}
    </ul>
    </div>
  );
};

export default CustomLegend;
