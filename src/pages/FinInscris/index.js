import React from "react";
import "./style.css";
export default function FinInscris() {
  //javascript

  return (
    <div>
      <section className="finscris" id="finscris">
        <center>
          <fieldset style={{ width: "25%" }} className="fieldset">
            <form className="fin">
              <h1>😊Inscription terminée✅</h1>
              <input type="submit" id="submit" name="" value="Commencer" />
            </form>
          </fieldset>
        </center>
      </section>
      <section>
        <div className="row no-gutters">
          <div className="col-md-6 no-gutters">
            <div className="leftside"></div>
          </div>
          <div className="col-md-6 no-gutters">
            <div className="heightside"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
