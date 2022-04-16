import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./container/Layout/Layout";
import About from "./container/About/About";
import Contacts from "./container/Contacts/Contacts";
import NoMatch from "./container/NoMatch/NoMatch";
import UserById from "./container/UserById/UserById";
import img1 from "./img/img1.png";
import Figma from "./components/Figma";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.png";
import img5 from "./img/img5.png";
import img6 from "./img/img6.png";
import img7 from "./img/img7.png";
import img8 from "./img/img8.png";
import FIgmaFooter from "./components/FIgmaFooter";
import FigmaTopBody from "./components/FigmaTopBody";
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
];

const figmaCardList1 = [
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

const CardList = [
  {
    img: img1,
    text1: "Photography",
    text2: "Japan House opens in mountainside to foster peak creativity.",
    text3: "By Reta Torphy",
  },
  {
    img: img2,
    text1: "Photography",
    text2: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
    text3: "By Alessandra Ortiz",
  },
  {
    img: img7,
    text1: "Architecture",
    text2:
      "Suzanne Saroff’s meticulously arranged photographs alter perceptions",
    text3: "By Reta Torphy",
  },
  {
    img: img8,
    text1: "Architecture",
    text2:
      "Suzanne Saroff’s meticulously arranged photographs alter perceptions",
    text3: "By Reta Torphy",
  },
];
const CardList1 = [
  {
    img: img5,
    text1: "Interactive Design",
    text2: "London-based Yinka Iloris storytelling furniture",
    text3: "By Annie Lueilwitz",
  },
  {
    img: img6,
    text1: "Graphic Design",
    text2:
      "Anonymous Israeli art collective Broken Fingaz direct music video for U2 and Beck",
    text3: "By Simeon Brekke",
  },
  {
    img: img7,
    text1: "Architecture",
    text2:
      "Suzanne Saroff’s meticulously arranged photographs alter perceptions",
    text3: "By Reta Torphy",
  },
  {
    img: img8,
    text1: "Architecture",
    text2:
      "Suzanne Saroff’s meticulously arranged photographs alter perceptions",
    text3: "By Reta Torphy",
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
        <FigmaTopBody />
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
        <div className="main">
          {figmaCardList1.map((element, index) => {
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
          {CardList.map((element, index) => {
            return (
              <Figma2
                key={index}
                img={element.img}
                text1={element.text1}
                text2={element.text2}
                text3={element.text3}
              />
            );
          })}
        </div>
        <div className="main2">
          {CardList1.map((element, index) => {
            return (
              <Figma2
                key={index}
                img={element.img}
                text1={element.text1}
                text2={element.text2}
                text3={element.text3}
              />
            );
          })}
        </div>
        <div className="midleText">
          <div className="midleText__p">
            <p className="p">view all latest posts</p>
          </div>
        </div>
        <FIgmaFooter />
      </div>
    </>
  );
}

export default App;
