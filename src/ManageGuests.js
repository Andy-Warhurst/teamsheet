import React, { useState} from "react";
import GUESTS from "./GuestList.json";

const ManageGuests = ({team, guests, setGuests}) => {

  // console.log("ManageGuests Props: ", props);

  // var {team, guests, dispatch} = props;

  
  const [latestGuest, setLatestGuest] = useState(1001);

  var d = new Date();
  var n = d.getTime();

  function addGuest (name) {

    var newGuests = 
      {
        "id": latestGuest,
        "name": name,
        "team": team,
        "dateofbirth": "10/08/1967",
        "status": "Active",
        "regotype": "Guest",
        "games": 0
      } ;

    setLatestGuest(latestGuest+1);

    var allGuests = [];
    allGuests = allGuests.concat(guests);
    
    allGuests[allGuests.length] = newGuests;
    GUESTS[GUESTS.length] = newGuests;

    console.log("All guests:", allGuests);
    console.log("GUESTS:", GUESTS);

    dispatch({type: 'CHANGE_GUESTS', payload: allGuests});
  }

  return (
    <div>
      <h3>Manage Guests</h3>
      {/* <form> */}
        <label>Name:</label>
        <input type="text" id="gname" name="gname"/>
        <button
          onClick={() => addGuest(gname.value)}
        >+</button>
      {/* </form> */}
    </div>
  );
};

export default ManageGuests;