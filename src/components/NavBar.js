import React, { useEffect } from "react";

const NavBar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const name = user && user.name.split(" ")[0][0] + user.name.split(" ")[1][0];

  return (
    <div className="nav">
      <div>Newton School</div>
      {user && <div className="dp">{name}</div>}
    </div>
  );
};

export default NavBar;
