import { PropTypes } from "prop-types";

/**
 * Display customized dots in the average session graph.
 * 
 * @param { number } cx - The cursor x position
 * @param { number } cy - The cursor y position
 * 
 * @returns { React.ReactElement } The CustomizedDot component
 */

const CustomizedDot = ({ cx, cy }) => {
    return (
      <svg
        x={cx - 10}
        y={cy - 10}
        width={20}
        height={20}
        fill="white"
        viewBox="0 0 18 17.95"
      >
        <path
          className="cls-1"
          d="M9,15.45c3.58,0,6.5-2.88,6.5-6.48s-2.92-6.48-6.5-6.48S2.5,5.38,2.5,8.98s2.92,6.48,6.5,6.48Z"
          fill="rgba(255, 255, 255, 0.2)"
        />
        <path
          className="cls-2"
          d="M9,12.95c2.21,0,4-1.78,4-3.98s-1.79-3.98-4-3.98-4,1.78-4,3.98,1.79,3.98,4,3.98Z"
        />
      </svg>
    );
};

 export default CustomizedDot;

 CustomizedDot.propTypes = {
    cx: PropTypes.number,
    cy: PropTypes.number
}