import React from "react";
import GUESTS from "./GuestList.json";

const ManageGuests = ({team, guests, setGuests}) => {

  function addGuest (name) {

    console.log("Name:  ", name);

    var newGuests = 
      {
        "id": 501,
        "name": name,
        "team": team,
        "dateofbirth": "10/08/1967",
        "status": "Active",
        "regotype": "Guest",
        "games": 0
      } ;

    console.log("New guests:", newGuests);

    var allGuests = [];
    allGuests = allGuests.concat(guests);
    
    allGuests[allGuests.length] = newGuests;
    GUESTS[GUESTS.length] = newGuests;

    console.log("All guests:", allGuests);
    console.log("GUESTS:", GUESTS);

    setGuests(allGuests);
  }

  return (
    <div>
      <h3>Manage Guests</h3>
      <form>
        <label htmlFor="gname">Name:</label>
        <input type="text" id="gname" name="gname"/><br/>
        <button
          onClick={() => addGuest("New Player")}
        >+</button>
      </form>
    </div>
  );
};

export default ManageGuests;