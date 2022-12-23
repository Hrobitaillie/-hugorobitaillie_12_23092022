/**
 * Define customised style for BulletStyle
 * 
 * @param { string } entry - the element's color
 * 
 */


export const BulletStyle = (entry) => {
    return {
      width: 8,
      height: 8,
      borderRadius: 10,
      backgroundColor: entry.color,
    };
};

/**
 * Define customised style for ListStyle
 */
export const ListStyle = {
    display: "flex",
    alignItems: "center",
    gap: "32px"
};

/**
 * Define customised style for ListElementStyle
 */
export const ListElementStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontWeight: "500",
    fontSize: "14px"
};

/**
 * Define customised style for ContainerStyle
 */
export const ContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "calc(100% + 10px )",
    marginBottom:"50px",
    paddingLeft:"30px"
}

/**
 * Define customised style for LabelStyle
 */
export const LabelStyle = {
    fontWeight: 500,
    fontSize: "14px",
    color: "#9B9EAC",
}; 