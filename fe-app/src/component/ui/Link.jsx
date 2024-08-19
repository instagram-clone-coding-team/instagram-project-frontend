import React from "react";
import { Link } from "react-router-dom";

function StyledLink({to, children}) {
  return (
    <Link to={to} style={{ textDecoration: "none"}}>
      {children}
    </Link>
  );
}

export default StyledLink;