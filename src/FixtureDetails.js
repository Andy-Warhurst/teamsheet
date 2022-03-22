import React from "react";
import FIXTURES from "./fixtures22.json";

const FixtureDetails = (props) => {
  var matchingFixtures = FIXTURES.filter(selectFixture);
  var theFixture = matchingFixtures[0];

  function selectFixture(x) {
    return (
      (x.round == props.round && x.hometeam == props.team) ||
      (x.round == props.round && x.awayteam == props.team)
    );
  }

  return (
    <div className="fixture-details">
      <table className="fixture-details-top">
        <tbody>
          <tr>
            <th width="590" height="40">
              {theFixture.hometeam} v {theFixture.awayteam} (Division{" "}
              {theFixture.division})
            </th>
            {/* 
            <th className="samsl-logo" width="50px">
              SAMSL
            </th> */}
          </tr>
        </tbody>
      </table>
      <table className="fixture-details-bottom">
        <tbody>
          <tr>
            <td width="220">Round {props.round}</td>
            <td width="220">
              {theFixture.date} {theFixture.time}{" "}
            </td>
            <td>{theFixture.venue}</td>
          </tr>
        </tbody>
      </table>

      {/* Don't forget to add the logo image */}
    </div>
  );
};

export default FixtureDetails;
