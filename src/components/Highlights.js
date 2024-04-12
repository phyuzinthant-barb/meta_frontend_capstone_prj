import React from "react";
import Button from "../sub-components/Button";
import Card from "../sub-components/Card";
import GreekSalad from "../assets/greek-salad.jpg";
import Bruchetta from "../assets/bruchetta.jpg";
import Dessert from "../assets/lemon-dessert.jpg";

const Highlights = () => {
  return (
    <div
      style={{
        width: "90%",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "5%",
          marginTop: "3%",
        }}
      >
        <div style={{}}>
          <text style={{ fontSize: 60 }}>This weeks specials!</text>
        </div>
        <Button text={"Online Menu"} width={200} height={50} />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Card
          title={"Greek Salad"}
          price={"$ 12.99"}
          body={
            "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
          }
          image={GreekSalad}
        />
        <Card
          title={"Bruchetta"}
          price={"$ 5.99"}
          body={
            "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
          }
          image={Bruchetta}
        />
        <Card
          title={"Lemon Dessert"}
          price={"$ 5.00"}
          body={
            "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          }
          image={Dessert}
        />
      </div>
    </div>
  );
};

export default Highlights;
