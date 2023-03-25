import React from "react";
import "./style.css";
export default function Inscription() {
  //javascript

  return (
    <div>
      <section className="inscris" id="inscris">
        <div className="ption">
          <div className="vous">
            <h2 className="ttr">
              <span>I</span>nscription
            </h2>
            <p className="bb">inscrivez-vous ici 👇</p>
          </div>
        </div>
        <fieldset style={{ width: "25%" }} className="fieldset">
          <form className="seule">
            <h1>Inscrivez-vous!</h1>
            <hr />
            <table className="tab">
              <tbody>
                <tr>
                  <td>nom:</td>
                  <td>
                    <input type="text" name="prenom" value="" />
                    <br />
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>prenom:</td>
                  <td>
                    <input type="text" name="nom" value="" />
                    <br />
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>email:</td>
                  <td>
                    <input type="email" name="email" value="" />
                    <br />
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>motpass:</td>
                  <td>
                    <input type="password" name="" value="pwd1" />
                    <br />
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>confirmer mtps:</td>
                  <td>
                    <input type="password" name="pwd2" value="" />
                    <br />
                    <br />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <input
                      type="submit"
                      id="submit"
                      name=""
                      value="S'inscrire"
                    />
                    <br />
                    <br />
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              vous avez déja un compte ?<a href="#login"> se connecter</a>
            </p>
          </form>
        </fieldset>
      </section>
    </div>
  );
}
