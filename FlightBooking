import React from "react";

export default function FlightBooking() {
  const bookTicket = () => {
    const name = prompt("Enter Passenger Name:");
    if (!name) return alert("Booking cancelled!");

    const destination = prompt("Enter Destination:");
    if (!destination) return alert("Booking cancelled!");

    const confirmBooking = confirm(
      `Confirm Booking?\n\nName: ${name}\nDestination: ${destination}`
    );

    if (confirmBooking) {
      alert("🎉 Flight Ticket Booked Successfully!");
    } else {
      alert("❌ Booking Cancelled by User");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Flight Ticket Booking</h2>
      <button onClick={bookTicket}>Book Flight Ticket</button>
    </div>
  );
}
