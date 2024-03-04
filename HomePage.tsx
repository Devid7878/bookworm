import React from "react";
import NavBar from "./NavBar";
import SellerHome from "./SellerHome";

const HomePage = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      
      <main>
        <SellerHome />
      </main>
    </>
  );
};

export default HomePage;
