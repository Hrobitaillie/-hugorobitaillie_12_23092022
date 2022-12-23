import { PropTypes } from "prop-types";
import React from "react";

/**
 * Display Error
 * @param {string} error - The error content
 * 
 * @returns {React.ReactElement} The Error Component
 */

export default function Error( { error } ){
    console.log("il y a eu une ereur", error);
    return(
        <h2>il y a eu une ereur</h2>
    )
}

Error.propTypes = {
    error: PropTypes.string
}
