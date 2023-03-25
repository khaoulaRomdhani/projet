/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
export default function Login() {
  //javascript

  return (
    <div>
      <section className="login" id="login">
        <div className="global">
          <h1>
            <span>l</span>ogin
          </h1>
          <form>
            <input type="text" className="input1" placeholder="nom:" />
            <input type="password" className="input2" placeholder="mot-pass:" />
            <input type="submit" className="input3" value="envoyer" />
          </form>
          <a href="#" className="indice1">
            oublier mot-pass?
          </a>
          <a href="#" className="indice2">
            inscription
          </a>
        </div>
      </section>
    </div>
  );
}
