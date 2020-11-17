import React from "react";

const Player = (props) => {
  return (
    <tr>
      <td>{props.reg_num}</td>
      <td>{props.name}</td>
      <td>{props.team}</td>
    </tr>
  );
};

export default Player;
