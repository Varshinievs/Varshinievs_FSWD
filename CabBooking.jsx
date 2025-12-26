import React from "react";

export default functioimport React from "react";

export default function CabBooking() {
  const bookCab = () => {
    alert("🚕 Welcome to QuickCab!");

    const passenger = prompt("Enter Passenger Name:");
    if (!passenger) return alert("Booking cancelled!");

    const pickup = prompt("Enter Pickup Location:");
    if (!pickup) return alert("Booking cancelled!");

    const drop = prompt("Enter Drop Location:");
    if (!drop) return alert("Booking cancelled!");

    const distance = prompt("Enter Distance in KM:");
    if (!distance || isNaN(distance)) {
      alert("Invalid distance!");
      return;
    }

    const fare = distance * 15;

    const confirmRide = confirm(
      `🚖 Ride Details\n\nPassenger: ${passenger}\nFrom: ${pickup}\nTo: ${drop}\nDistance: ${distance} KM\nEstimated Fare: ₹${fare}\n\nConfirm Ride?`
    );

    if (confirmRide) {
      alert(
        `✅ Cab Booked Successfully!\n\n🚗 Driver: Raj\n📞 Contact: 9XXXXXXXXX\n💰 Fare: ₹${fare}\n\nHave a safe journey!`
      );
    } else {
      alert("❌ Ride Cancelled");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Online Cab Booking</h2>
      <button onClick={bookCab}>Book Cab</button>
    </div>
  );
}() {
  const bookCab = () => {
    alert("🚕 Welcome to QuickCab!");

    const passenger = prompt("Enter Passenger Name:");
    if (!passenger) return alert("Booking cancelled!");

    const pickup = prompt("Enter Pickup Location:");
    if (!pickup) return alert("Booking cancelled!");

    const drop = prompt("Enter Drop Location:");
    if (!drop) return alert("Booking cancelled!");

    const distance = prompt("Enter Distance in KM:");
    if (!distance || isNaN(distance)) {
      alert("Invalid distance!");
      return;
    }

    const fare = distance * 15;

    const confirmRide = confirm(
      `🚖 Ride Details\n\nPassenger: ${passenger}\nFrom: ${pickup}\nTo: ${drop}\nDistance: ${distance} KM\nEstimated Fare: ₹${fare}\n\nConfirm Ride?`
    );

    if (confirmRide) {
      alert(
        `✅ Cab Booked Successfully!\n\n🚗 Driver: Raj\n📞 Contact: 9XXXXXXXXX\n💰 Fare: ₹${fare}\n\nHave a safe journey!`
      );
    } else {
      alert("❌ Ride Cancelled");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Online Cab Booking</h2>
      <button onClick={bookCab}>Book Cab</button>
    </div>
  );
}
