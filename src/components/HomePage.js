import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Highlights from "./Highlights";

const HomePage = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "10%",
        marginRight: "10%",
        zIndex: 0,
      }}
    >
      <Nav />
      <div
        style={{
          position: "absolute",
          backgroundColor: "#495E57",
          width: "100%",
          height: 260,
          top: "10%",
        }}
      />
      <Hero />
      <Highlights />
    </main>
  );
};

export default HomePage;
