import { PropTypes } from "prop-types";
import { BulletStyle, ContainerStyle, ListElementStyle, ListStyle } from "./customStyles";

/**
 * Display customized legend on top of daily activity graph.
 * 
 * @param { array } payload - The graph's content at the mouse position
 * 
 * @returns { React.ReactElement } The CustomLegend component
 */

const CustomLegend = ( { payload } ) => {

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


CustomLegend.propTypes = {
  payload: PropTypes.array.isRequired
}