import React, { useState } from "react";
import Players from "./Players.json";
// import Guests from "./Guests";
// import PrintPreview from "./PrintPreview";

const Rounds = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

const Selector = ({round, team, guests, selected, setSelected}) => {

  var d = new Date();
  var n = d.getTime();
  
  console.log("Running Selector(",n,"). guests:", guests.length);

  var availablePlayers = Players.filter(extractPlayersByTeam).sort((a, b) => a.name > b.name);
  availablePlayers = availablePlayers.concat(guests);
  var selectedPlayers = availablePlayers;

  //var availableGuests = GuestList.filter(extractPlayersByTeam).sort((a, b) => a.name > b.name);

  function extractPlayersByTeam(plr) {
    return plr.team === team;    
  }

  function updateSelected (selection) {

    var updatedSelections = [];
    updatedSelections = updatedSelections.concat(selected);

    // console.log(selection);
    // console.log(selected);

    if (!updatedSelections.includes(selection)) {
      updatedSelections[updatedSelections.length] = selection;
    } else {
      var index = updatedSelections.indexOf(selection);
      updatedSelections.splice(index, 1);
    }

    // console.log(selected);

    setSelected(updatedSelections);
  }

  return (
    <div className="teamsheet-generator">
      <h3 >{team} (Round {round})</h3>
      <table>
        <tbody>
          <tr valign="top">
            <td> 
              <div className="search-params">
                <form>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>playing</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      availablePlayers.map(p => (
                        <tr key={p.id}>
                          <td>
                            {p.name}
                          </td>
                          <td>
                            <input 
                            type="checkbox" checked={p.active}
                            id={p.id} 
                            onClick={() => updateSelected(p)}
                            />
              
                          </td>
                        </tr>
                      ))
                    }

                    </tbody>

                  </table>

                  {/* <Guests 
                    team={team}
                  /> */}

                 
                </form>
              </div> 
            </td>
            <td>
              {/* <PrintPreview round={round} team={team} selected={selected}/> */}
            </td>
          </tr>
        </tbody>
      </table>
    

    

    </div>
  );
};

export default Selector;
