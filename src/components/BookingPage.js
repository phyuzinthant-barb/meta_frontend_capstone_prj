import React from "react";
import Nav from "./Nav";
import BookingForm from "./BookingForm";

const BookingPage = () => {
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
      <section
        style={{ backgroundColor: "#dee2e6", padding: 40, marginTop: 20 }}
      >
        <div>
          <BookingForm />
        </div>
      </section>
    </main>
  );
};

export default BookingPage;
