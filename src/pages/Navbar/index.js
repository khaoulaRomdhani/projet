import React from 'react'
import './style.css';
export default function() {
  return (
    <div>
<header>
        <a href="#" className="logo">
          <span>Tasty</span>food
        </a>
        <div className="menutoggle" onClick={toggleMenu}>
          <i className={showMenu ? 'fa fa-times' : 'fa fa-bars'}></i>
        </div>
        <ul className={`navbar ${showMenu ? 'active' : ''}`}>
          <li>
            <a href="#banniere" onClick={toggleMenu}>
              acceuil
            </a>
          </li>
          <li>
            <a href="#acceuil" onClick={toggleMenu}>
              menu
            </a>
          </li>
          <li>
            <a href="#apropos" onClick={toggleMenu}>
              a propos de nous
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              contact
            </a>
          </li>
          <li>
            <a href="#inscris" className="btn-login" onClick={toggleMenu}>
              inscription
            </a>
          </li>
        </ul>
      </header>
      <section className="banniere" id="banniere">
        <div className="contenu">
          <h2>que des plats délicieux</h2>
          <p>tous nos conseils pour un faire de bon plat</p>
          <a href="#login" className="btn1" onClick={toggleMenu}>
            se connecter
          </a>
          <a href="#inscris" className="khaoula" onClick={toggleMenu}>
            inscription
          </a>
        </div>
      </section>
    </div>
  );


  
}
