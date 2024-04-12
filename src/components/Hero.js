import React from "react";
import FoodImage from "./../assets/restauranfood.jpg";
import Button from "../sub-components/Button";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        zIndex: 1,
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: "50%",
          marginTop: 30,
        }}
      >
        <h1 style={{ color: "#f4ce14" }}>Little Lemon</h1>
        <h3 style={{ color: "#fff" }}>Chicago</h3>
        <p style={{ color: "#fff" }}>
          We are a family owned Mediterranean restaurant focused on traditional
          recipes served with a modern twist.
        </p>
        <NavLink to="/booking">
          <Button text={"Reserve a Table"} />
        </NavLink>
      </div>
      <div style={{ marginTop: 34 }}>
        <img
          src={FoodImage}
          height="300"
          width="250"
          style={{ borderRadius: 20 }}
        />
      </div>
    </div>
  );
};

export default Hero;
