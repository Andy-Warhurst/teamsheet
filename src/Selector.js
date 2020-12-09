import React, { useReducer} from "react";
import Teams from "./TeamData.json";
import Players from "./Players.json";
import FixtureDetails from "./FixtureDetails";
import PlayerList from "./PlayerList";
import Result from "./Result";
import Officials from "./Officials";
import reducer from "./Reducer";

  const initialState = {
    round: 1,
    team: "Adelaide Spurs",
    selected: [],
  };

  const Rounds = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

const Selector = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const {round, team, selected} = state;

  var availablePlayers = Players.filter(extractPlayersByTeam).sort((a, b) => a.name > b.name);
  var selectedPlayers = availablePlayers;


  function extractPlayersByTeam(plr) {
    return plr.team === team;    
  }

  return (
    <div className="teamsheet-generator">
      <table>
        <tbody>
          <tr valign="top">
            <td> 
              <div className="search-params">
                <form>
                  <label htmlFor="round">
                    Round
                    <select
                    id="round"
                    value={round}
                      placeholder="Round"
                      onChange={(e) => dispatch({type: 'CHANGE_ROUND', payload: e.target.value})}
                      onBlur={(e) => dispatch({type: 'CHANGE_ROUND', payload: e.target.value})}
                      >
                        {
                        Rounds.map(round => (
                          <option key={round} value={round}>{round}</option>
                        ))
                      }

                      </select>
                  </label>

                  <label htmlFor="team">
                    Team
                    <select 
                      id="team"
                      value={team}
                      onChange={(e) => dispatch({type: 'CHANGE_TEAM', payload: e.target.value})}
                      onBlur={(e) => dispatch({type: 'CHANGE_TEAM', payload: e.target.value})}
                    >
                      {
                      Teams.map(team => (
                        <option key={team.id} value={team.name}>{team.name}</option>))
                      }
                    </select>
                  </label>

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
                            onClick={(e) => dispatch({type: 'TOGGLE_PLAYER', payload: p, extra: e.target.checked})}
                            />
              
                          </td>
                        </tr>
                    ))
                    }

                    </tbody>
                  </table>

                  {/* <br/>
                  <button>Print</button> */}
                </form>
              </div> 
            </td>
            <td>
              <div className="printArea" >
                <FixtureDetails
                  round={round}
                  team={team}
                />
                <PlayerList team={team} players={selected} />
                <br />
                <Result 
                  round={round}
                  team={team} />
                  <br />
                  <Officials />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    

    

    </div>
  );
};

export default Selector;
