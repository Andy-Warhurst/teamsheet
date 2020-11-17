import React from "react";

const Team = (props) => {
  return (
    <div >
      <h1>{props.name} (Division {props.division})</h1>
      <h2>Delegate: {props.coach}</h2>

      <table>
        <tbody>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Club</th>
        </tr>
        {/* <tr>
          <td>{props.player.id}</td>
          <td>{props.player.name}</td>
          <td>{props.player.plays_for}</td>
        </tr> */}
        <tr>
          <td>00000001</td>
          <td>Andy Warhurst</td>
          <td>Adelaide Spurs</td>
        </tr>
        <tr>
          <td>00000002</td>
          <td>Denis Carey</td>
          <td>Adelaide Spurs</td>
        </tr>
        <tr>
          <td>00000003</td>
          <td>Gary Pike</td>
          <td>Adelaide Spurs</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Team;
