import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./container/Layout/Layout";
import About from "./container/About/About";
import Contacts from "./container/Contacts/Contacts";
import NoMatch from "./container/NoMatch/NoMatch";
import UserById from "./container/UserById/UserById";
import text from "./img/text.png";
import img1 from "./img/img1.png";
import Figma from "./components/Figma";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.png";
import img5 from "./img/img5.png";
import img6 from "./img/img6.png";
import img7 from "./img/img7.png";
import img8 from "./img/img8.png";

import Figma2 from "./components/Figma2";
const figmaCardList = [
  {
    img: img2,
    text1: "Photography",
    text2: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
    text3: "By Alessandra Ortiz",
  },
  {
    img: img3,
    text1: "Photography",
    text2: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
    text3: "By Alessandra Ortiz",
  },
  {
    img: img4,
    text1: "Photography",
    text2: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
    text3: "By Alessandra Ortiz",
  },
  {
    img: img5,
    text1: "Photography",
    text2: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
    text3: "By Alessandra Ortiz",
  },
  {
    img: img6,
    text1: "Photography",
    text2: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
    text3: "By Alessandra Ortiz",
  },
  {
    img: img7,
    text1: "Photography",
    text2: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
    text3: "By Alessandra Ortiz",
  },
];
function App() {
  return (
    <>
      {/* //  <Routes>
    //    <Route path="/" element={<Layout/>}>
    //    <Route index path="/contacts" element={<Contacts/>}/>
    //    <Route path="/about" element={<About/>}/>
    //    <Route path="*" element={<NoMatch/>}/>
    //    <Route path="user/:id" element={<UserById/>}/>
    //    </Route>
    //  </Routes>
 */}

      <div className="container">
        <div className="topBar">
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
        <div className="main">
          {figmaCardList.map((element, index) => {
            return (
              <Figma
                key={index}
                img={element.img}
                text1={element.text1}
                text2={element.text2}
                text3={element.text3}
              />
            );
          })}

        </div>
        <hr />
        <div className="text">
          <p className="text__P">LATEST POSTS</p>
        </div>
        <div className="main2">
          <Figma2
            img={img1}
            text1="Photography"
            text2="Japan House opens in mountainside to foster peak creativity."
            text3="By Reta Torphy"
          />
          <Figma2
            img={img2}
            text1="Photography"
            text2="Helmut Lang celebrates taxi drivers worldwide in latest campaign"
            text3="By Alessandra Ortiz"
          />
          <Figma
            img={img3}
            text1="Photography"
            text2="Bowlcut launch a new summer collection that pays homage to “UK legends”"
            text3="By Rosanna Ondricka"
          />
          <Figma
            img={img4}
            text1="Photography"
            text2="Thousands of previously unseen photographs by Andy Warhol will be made public this Autumn"
            text3="By Annie Lueilwitz"
          />
        </div>
        <div className="main2">
          <Figma2
            img={img5}
            text1="Interactive Design"
            text2="London-based Yinka Iloris storytelling furniture"
            text3="By Annie Lueilwitz"
          />
          <Figma2
            img={img6}
            text1="Graphic Design"
            text2="Anonymous Israeli art collective Broken Fingaz direct music video for U2 and Beck"
            text3="By Simeon Brekke"
          />
          <Figma2
            img={img7}
            text1="Architecture"
            text2="Suzanne Saroff’s meticulously arranged photographs alter perceptions"
            text3="By Reta Torphy"
          />
          <Figma2
            img={img8}
            text1="Architecture"
            text2="Suzanne Saroff’s meticulously arranged photographs alter perceptions"
            text3="By Reta Torphy"
          />
        </div>
      </div>
    </>
  );
}

export default App;
