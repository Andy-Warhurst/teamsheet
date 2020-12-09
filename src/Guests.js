
import React from "react";
import GUESTS from "./GuestList.json";
import ManageGuests from "./ManageGuests";

const Guests = (props) => {
  
    var availableGuests = GUESTS.filter(extractPlayersByTeam).sort((a, b) => a.name > b.name);
    // var availableGuests = GUESTS;

  function extractPlayersByTeam(plr) {
    return plr.team === props.team;    
  }

    return (

        <div className="guests">

            <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>playing</th>
                <th>played</th>
                </tr>
            </thead>
            <tbody>
            {
                availableGuests.map(p => (
                <tr key={p.id}>
                    <td>
                    {p.name}
                    </td>
                    <td>
                    <input 
                    type="checkbox" checked={p.active}
                    id={p.id} 
                    onClick={(e) => dispatch({type: 'TOGGLE_PLAYER', payload: p, extra: e.target.checked})}
                    />        
                    </td>
                    <td>
                    {p.games}
                    </td>
                </tr>
                ))
            }

            </tbody>
            </table>
            <ManageGuests guests={props.availableGuests} />
        </div>


    );
};

export default Guests;