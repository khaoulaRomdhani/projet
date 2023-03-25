import React from "react";
import "./style.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div>
      <header>
        <div className="menutoggle"></div>
        <ul>
          <li>
            <a href="#banniere">acceuil</a>
          </li>
          <li>
            <a href="#acceuil">menu</a>
          </li>
          <li>
            <a href="#apropos">a propos de nous</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
          <li>
            <a href="#inscris" className="btn-login">
              inscription
            </a>
          </li>
        </ul>
      </header>
      <section className="banniere" id="banniere">
        <div className="contenu">
          <h2>que des plats délicieux</h2>
          <p>tous nos conseils pour un faire de bon plat</p>
          <a href="#login" className="btn1">
            se connecter
          </a>
          <a href="#inscris" className="khaoula">
            inscription
          </a>
        </div>
      </section>
    </div>
  );
}
