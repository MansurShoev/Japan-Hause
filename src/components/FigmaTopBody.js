import React from 'react'
import text from "../img/text.png";

import img1 from "../img/img1.png";
function FigmaTopBody() {
  return (
    <div>      <div className="topBar">
    <div className="topBar__img">
      <img src={text} />
    </div>
    <div className="topBar__textMenu">
      <p className="textBar">Home</p>
      <p className="textBar">Latest</p>
      <p className="textBar">About</p>
    </div>
    <hr />
  </div>
  <div className="topBody">
          <div className="topBody__img">
            <img className="topBody__img" src={img1} />
          </div>
          <div className="topBody__text">
            <p className="topBody__text0">Illustration</p>
            <h1 className="topBody__text2">
              {" "}
              Japan House opens <br />
              in mountainside to <br />
              foster peak <br />
              creativity.
            </h1>
            <p className="topBody__text3">
              Enim omittam qui id, ex quo atqui dictas complectitur.
              <br />
              Nec ad timeam accusata, hinc justo falli id eum, ferri <br />
              novum molestie eos cu.
            </p>
            <p className="topBody__text4">By Reta Torphy</p>
          </div>
        </div>
  </div>
  )
}

export default FigmaTopBody