import React from "react";
import FixtureDetails from "./FixtureDetails";
import PlayerList from "./PlayerList";
import Result from "./Result";
import Officials from "./Officials";

const PrintPreview = (props) => {

    return (

        <div className="printArea" >
            <FixtureDetails
                round={props.round}
                team={props.team}
            />
            <PlayerList team={props.team} players={props.selected} />
            <br />
            <Result 
                round={props.round}
                team={props.team} />
                <br />
                <Officials />
        </div>
    );
};

export default PrintPreview;