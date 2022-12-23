import { PropTypes } from "prop-types";

/** 
 * Display customized tooltip in the average session graph.
 * 
 * @param { boolean } active - The state of "if displayed" or not
 * @param { array } payload - The graph's content at the mouse position
 * 
 * @returns { React.ReactElement } The CustomTooltip component
 */

const CustomTooltip = ({ active, payload }) => {
    // console.log(active);
    
    if (active && payload && payload.length) {
      return (
        <div className=" bg-white p-2">
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };

export default CustomTooltip

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
}