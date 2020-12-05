import React, { useState } from "react";
import Selector from "./Selector";
import DevPanel from "./DevPanel";
import PrintPreview from "./PrintPreview";
import GUESTS from "./GuestList.json";
import ManageGuests from "./ManageGuests";

// We want to control the round and team at this level.

const HomePage = () => {

    const [round, setRound] = useState(1);
    const [team, setTeam] = useState("Adelaide Spurs");
    const [selected, setSelected] = useState([]);
    const [guests, setGuests] = useState(GUESTS.sort((a, b) => a.name > b.name));



    const count = selected.length;
    const gcount = guests.length;

    // console.log(selected);

    return (
        <div className="home-page">
            <p>Selected: {count}</p>
            <p>Guests: {gcount}</p>
            <DevPanel 
                round={round}
                team={team}
                setRound={setRound}
                setTeam={setTeam}
            />
            <ManageGuests
                team={team} 
                guests={guests}
                setGuests={setGuests}
            />
            <Selector 
                round={round}
                team={team} 
                guests={guests}
                selected={selected}
                setSelected={setSelected}
            />
            {/* <button onClick={() => setSelected( ["Test Player"])} > Test </button> */}

            {/* <PrintPreview round={round} team={team} selected={selected}/> */}
        </div>
    );
};

export default HomePage;