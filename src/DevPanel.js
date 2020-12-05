import React, {  useState} from "react";
import Teams from "./TeamData.json";

const Rounds = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

const DevPanel = ({round, team, setRound, setTeam}) => { 

    return (
        <div className="dev-panel"> 
        <form>

            <label htmlFor="round">
            Round
            <select
                id="round"
                value={round}
                placeholder="Round"
                onChange={(e) => setRound( e.target.value)}
                onBlur={(e) => setRound( e.target.value)}
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
                onChange={(e) => setTeam( e.target.value)}
                onBlur={(e) => setTeam( e.target.value)}
            >
                {
                    Teams.map(team => (
                    <option key={team.id} value={team.name}>{team.name}</option>))
                }
            </select>
            </label>
        </form>
        </div>
    );
}; 

export default DevPanel;
