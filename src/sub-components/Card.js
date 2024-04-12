import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const Card = ({ title, price, body, image }) => {
  return (
    <div
      style={{
        marginLeft: "2%",
        marginRight: "2%",
        borderRadius: 20,
        backgroundColor: "#dee2e6",
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <img
        src={image}
        width={"100%"}
        height={300}
        alt="food"
        style={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          objectFit: "cover",
        }}
      />
      <div
        style={{
          padding: 20,
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <text style={{ fontSize: 16, fontWeight: "600" }}>{title}</text>
            <text>{price}</text>
          </div>
          <div style={{ marginBottom: 20 }}>
            <text>{body}</text>
          </div>
        </div>
        <div style={{ marginTop: "auto" }}>
          <Button text={"Order a delivery"} />
        </div>
      </div>
    </div>
  );
};

export default Card;
