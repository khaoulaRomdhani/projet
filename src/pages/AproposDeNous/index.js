/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style.css";
export default function AproposDeNous() {
  //javascript

  return (
    <div>
      <section class="apropos" id="apropos">
        <div class="row">
          <div class="col50">
            <h2 class="titre-text">
              <span>A</span>Propos De Nous
            </h2>
            <p>
              En panne d’idées pour faire votre plat? Ne vous inquiétez pas,
              nous avons tout ce qu’il faut pour vous, afin de vous aider à
              présenter votre plat à votre manière ! Voici donc quelques idées,
              originaux et classiques, qui pourraient vous inspirer. N’hésitez
              donc pas à les adapter à votre cuisine pour un rendu unique ! …
            </p>
          </div>
          <div class="col50">
            <div class="img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRssT4RXr9pAcd1E3m3OHghxV9WVeeGAoPw-ixAfqP9TpJJs8ZRP8rouMGtUNiQ94klzr8&usqp=CAU" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
