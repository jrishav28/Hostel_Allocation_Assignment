import React from "react";
import { useHistory } from "react-router-dom";

const Hostel = () => {
  const history = useHistory();
  const onSelect = (category) => {
    history.push(`/hostelno/${category}`);
  };

  return (
    <div>
      <h1 id="choose">Choose your Hostel</h1>
      <div className="hostel">
        <div className="girls" onClick={() => onSelect("girls")}>
          <p>👧</p>
          <h3>Girls Hostel</h3>
        </div>
        <div className="boys" onClick={() => onSelect("boys")}>
          <p>👦</p>
          <h3>Boys Hostel</h3>
        </div>
      </div>
    </div>
  );
};

export default Hostel;
