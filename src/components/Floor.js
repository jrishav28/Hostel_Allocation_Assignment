import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Floor = () => {
  const floors = [
    "1st Floor",
    "2nd Floor",
    "3rd Floor",
    "4th Floor",
    "5th Floor",
  ];
  const f1 = [1, 2, 3, 4];
  const f2 = [5, 6];
  const f3 = [7, 8, 9, 10];

  let { category, hostelno } = useParams();
  const [floor, setFloor] = useState(floors[0]);
  const [room, setRoom] = useState("");
  const [book, setBook] = useState(false);
  const [success, setSuccess] = useState(false);
  let user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    user = JSON.parse(localStorage.getItem("user"));
    if (room && floor) {
      setBook(true);
    }
  }, [room, floor]);
  const onBook = () => {
    const userName = JSON.parse(localStorage.getItem("user"));
    const booking = {
      category: category,
      hostelNo: hostelno,
      floor: floor,
      room: room,
    };
    if (userName) {
      console.log(userName);
      userName.booking = booking;
    }
    localStorage.setItem("user", JSON.stringify(userName));
    setSuccess(true);
  };

  return (
    <div className="floor">
      <h3>Choose a floor</h3>
      <select
        className="floor-select"
        value={floor}
        onChange={(e) => setFloor(e.target.value)}
      >
        {floors.map((f, i) => {
          return (
            <option key={i} value={f}>
              {f}
            </option>
          );
        })}
      </select>
      <div className="floor-buttons ">
        <div className="f1">
          {f1.map((f, i) => {
            return (
              <button
                key={i}
                value={f}
                className="roomBtn"
                onClick={(e) => setRoom(e.target.value)}
              >
                {f}
              </button>
            );
          })}
        </div>
        <div className="f2">
          {f2.map((f, i) => {
            return (
              <button
                key={i}
                value={f}
                className="roomBtn"
                onClick={(e) => setRoom(e.target.value)}
              >
                {f}
              </button>
            );
          })}
        </div>
        <div className="f3">
          {f3.map((f, i) => {
            return (
              <button
                key={i}
                value={f}
                className="roomBtn"
                onClick={(e) => setRoom(e.target.value)}
              >
                {f}
              </button>
            );
          })}
        </div>
        {book && (
          <button className="book" onClick={onBook}>
            Book Room
          </button>
        )}
      </div>
      {success && (
        <Modal
          setSuccess={setSuccess}
          hostelNo={user.booking.hostelNo}
          room={user.booking.room}
        />
      )}
    </div>
  );
};

const Modal = ({ setSuccess, hostelNo, room }) => {
  return (
    <div className="modal">
      <button id="cross" onClick={() => setSuccess(false)}>
        X
      </button>
      <h1 className="success">Success </h1>
      <h3 className="display-message">
        Your room has been booked successfully
      </h3>
      <p className="details">Your Room details are as follows</p>
      <label id="hs">Hostel No. </label>
      {hostelNo}
      <br />
      <label id="rn">Room No.</label> {room}
    </div>
  );
};

export default Floor;
