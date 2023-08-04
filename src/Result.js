import React from "react";
import FIXTURES from "./fixtures23.json";

const Result = (props) => {
  var matchingFixtures = FIXTURES.filter(selectFixture);
  var theFixture = matchingFixtures[0];

  function selectFixture(x) {
    return (
      (x.round == props.round && x.hometeam == props.team) ||
      (x.round == props.round && x.awayteam == props.team)
    );
  }

  return (
    <div className="results-table">
      <table>
        <thead>
          <tr>
            <th width="250"></th>
            <th width="70">HT</th>
            <th width="70">FT</th>
            <th width="70">ET (HT)</th>
            <th width="70">ET (FT)</th>
            <th width="70">Pens</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{theFixture.hometeam}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>{theFixture.awayteam}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Result;
