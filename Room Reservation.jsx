import React from "react";

export default function HotelReservation() {
  const reserveRoom = () => {
    const name = prompt("Enter Guest Name:");
    if (!name) {
      alert("Reservation cancelled!");
      return;
    }

    const roomType = prompt(
      "Enter Room Type:\nSingle / Double / Deluxe"
    );
    if (!roomType) {
      alert("Reservation cancelled!");
      return;
    }

    const days = prompt("Enter Number of Days:");
    if (!days) {
      alert("Reservation cancelled!");
      return;
    }

    const confirmBooking = confirm(
      `Confirm Reservation?\n\nName: ${name}\nRoom Type: ${roomType}\nDays: ${days}`
    );

    if (confirmBooking) {
      alert("✅ Hotel Room Reserved Successfully!");
    } else {
      alert("❌ Reservation Cancelled by User");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Hotel Reservation System</h2>
      <button onClick={reserveRoom}>Reserve Room</button>
    </div>
  );
}
