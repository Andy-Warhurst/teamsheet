import React, { useState, useReducer } from "react";
import Selector from "./Selector";
import DevPanel from "./DevPanel";
import PrintPreview from "./PrintPreview";
import GUESTS from "./GuestList.json";
import ManageGuests from "./ManageGuests";

import reducer from "./reducer";

// We want to control the round and team at this level.

const initialState = {
    round: 1,
    team: "Adelaide Spurs",
    selected: [],
    guests:  GUESTS.sort((a, b) => a.name > b.name)
};

const HomePage = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const {round, team, selected, guests} = state;

    const count = selected.length;
    const gcount = guests.length;

    return (
        <div className="home-page">
            <p>Selected: {count}</p>
            <p>Guests: {gcount}</p>
            <DevPanel 
                round={round}
                team={team}
                dispatch={dispatch}
            />
            <ManageGuests
                team={team} 
                guests={guests}
                dispatch={dispatch}
            />
            <Selector 
                round={round}
                team={team} 
                guests={guests}
                selected={selected}
                dispatch={dispatch}
            />

            <PrintPreview round={round} team={team} selected={selected}/>
        </div>
    );
};

export default HomePage;