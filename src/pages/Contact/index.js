import React from "react";
import "./style.css";
export default function Contact() {
  //javascript

  return (
    <div>
      <div classeName="container">
        <section class="contact" id="contact">
          <div class="titrenoir">
            <h2 titre-text>
              <span>C</span>ontact
            </h2>
            <p>hello word!</p>
          </div>
          <div class="contactform">
            <h3>envoyer message</h3>
            <form action="" className="mx-auto">
              <div className="inputboite">
                <input
                  type="text"
                  placeholder="Nom"
                  classeName="form-control"
                />
              </div>
              <div className="inputboite">
                <input
                  type="text"
                  placeholder="email"
                  classeName="form-control"
                />
              </div>
              <div className="inputboite">
                <textarea placeholder="message"></textarea>
              </div>
              <div className="inputboite">
                <input type="submit" value="envoyer" />
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
