import React from "react";

const Officials = () => {
  return (
    <div className="officials-table">
      <table>
        <thead>
          <tr>
            <th width="200">Officials</th>
            <th width="200">Name</th>
            <th width="200">Signature</th>
          </tr>
        </thead>
        <tbody>
          <tr height="40">
            <td>Team Manager/Delegate</td>
            <td />
            <td />
          </tr>
          <tr height="40">
            <td>Referee</td>
            <td />
            <td />
          </tr>
        </tbody>
      </table>
      <br />
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <h5>Teams</h5>
              <p>
                Check all information on this team sheet is correct. By signing
                above you agree it is correct.
              </p>
              <p>
                Send results to results@samsl.org.au or SMS to 0422 901018
                within 24 hours of the completion of the game.
              </p>
            </td>
            <td valign="top">
              <h5>Referees</h5>
              <p>
                It is your responsibility to post this team sheet to{" "}
                <b>SAMSL, PO Box 222, Fulham Gardens, SA 5024</b>, within 48
                hours of the completion of the game.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Officials;
