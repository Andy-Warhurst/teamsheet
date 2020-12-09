import React, { useState} from "react";
import GUESTS from "./GuestList.json";
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';


const ManageGuests = ({team, guests, dispatch}) => {

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
      <h3>Guests</h3>
        <label htmlFor="guestname">Name:</label>
        <InputGroup>
          <FormControl
            placeholder="Guest's Name"
            aria-label="Ruest's Name"
            aria-describedby="basic-addon2"
            id="guestname"
          />
          <InputGroup.Append>
            <Button
              variant="primary"
              onClick={() => addGuest(guestname.value)}
            >
              Add
            </Button>
          </InputGroup.Append>
        </InputGroup>

        {/* <input type="text" id="gname" name="gname"/>
        <Button
          variant="primary"
          onClick={() => addGuest(gname.value)}
        >+</Button> */}
    </div>
  );
};

export default ManageGuests;