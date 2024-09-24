import React from "react";
import Header from "../../component/NavBar/Header";
import Speciality from "../../component/NavBar/Speciality";
import TopsDoctor from "../../component/NavBar/TopsDoctor";
import Banner from "../../component/NavBar/Banner";

function Home() {
  return (
    <div>
      <Header />
      <Speciality />
      <TopsDoctor />
      <Banner />
    </div>
  );
}

export default Home;
