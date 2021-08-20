import React from "react";

const Final = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="final">
      <div className="final-container">
        <h1 style={{ textAlign: "center" }}>Welcome {user.name}</h1>
        <p>You have already booked a room</p>
        <h4>Your room details are as follows:</h4>
        <label className="label">
          Hostel No: <span className="result"> {user.booking.hostelNo}</span>
        </label>
        <label className="label">
          Room No: <span className="result">{user.booking.room}</span>
        </label>
      </div>
    </div>
  );
};

export default Final;
