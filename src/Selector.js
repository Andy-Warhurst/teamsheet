import React, { useState } from "react";
import Players from "./Players.json";

const Rounds = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

const Selector = ({round, team, guests, selected, dispatch}) => {

  var d = new Date();
  var n = d.getTime();
  
  console.log("Running Selector(",n,"). guests:", guests.length);

  var availablePlayers = Players;
  availablePlayers = availablePlayers.concat(guests);
  availablePlayers = availablePlayers.filter(extractPlayersByTeam).sort((a, b) => a.name > b.name);
  
  function extractPlayersByTeam(plr) {
    return plr.team === team;    
  }

  function updateSelected (selection) {

    var updatedSelections = [];
    updatedSelections = updatedSelections.concat(selected);

    console.log("selection: ", selection);
    console.log("Selected Before:",selected);

    if (!updatedSelections.includes(selection)) {
      updatedSelections[updatedSelections.length] = selection;
    } else {
      var index = updatedSelections.indexOf(selection);
      updatedSelections.splice(index, 1);
    }


    dispatch({type: 'CHANGE_SELECTED', payload: updatedSelections});
    console.log("Selected After:",selected);
  }

  return (
    <div className="teamsheet-generator">
    {/* <h3 >{team} (Round {round})</h3> */}
      <h3 >{team}</h3>
      <table>
        <tbody>
          <tr valign="top">
            <td> 
              <div >
                <form>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th></th>
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
