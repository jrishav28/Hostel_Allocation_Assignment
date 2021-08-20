import React, { useEffect } from "react";
import Hostel from "./Hostel";
import Final from "./Final";
const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user && user.booking ? <Final /> : <Hostel />;
};

export default Home;
