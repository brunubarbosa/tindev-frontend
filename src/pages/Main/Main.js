import React from 'react';
import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import unlike from '../../assets/unlike.svg';

export default function main({ match }) {
  console.log(match)
  return (
    <div className="main-container">
      <img src={logo} alt="Tindev" />
      <ul>
        <li>
          <img src={logo} alt="Tindev" alt=""/>
          <footer>
            <strong>Filipe</strong>
            <p>loren import ipsodsad fsa fda f a;</p>
          </footer>
          <div className="buttons">
            <button type="button">
            <img src={unlike} alt="Dislike" alt=""/>

            </button>
            <button type="button">
              <img src={like} alt="Like" alt=""/>

            </button>
          </div>

        </li>
      </ul>  
    </div>
  );
}