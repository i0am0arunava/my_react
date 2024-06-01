import React, { useState } from "react";
import "./index.css";
import heroImage from "./assets/hero.png";
import your4 from "./assets/your4.svg";
import your3 from "./assets/your3.svg";
import your2 from "./assets/your2.svg";
import your1 from "./assets/your1.svg";
import l4 from "./assets/l4.svg";
import l3 from "./assets/l3.svg";
import l2 from "./assets/l2.svg";
import l1 from "./assets/l1.svg";
import myImage from "./assets/last.png";
import myImag from "./assets/my11.png";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
const App = () => {
  const openLink = () => {
    window.open("https://fylehq.com", "_blank");
  };
  const [currentImage, setCurrentImage] = useState(1);
  const [showDialog, setShowDialog] = useState(false);
  const images = [
    "https://m.media-amazon.com/images/I/71E5OclZxZL.jpg",
    "https://i.ibb.co/qCkd9jS/img1.jpg",
    "https://i.ibb.co/jrRb11q/img2.jpg",
  ];

  const handleNext = () => {
    let items = document.querySelectorAll(".item");
    if (items.length > 0) {
      document.querySelector(".slide").appendChild(items[0]);
    }
  };

  const handlePrev = () => {
    let items = document.querySelectorAll(".item");
    if (items.length > 0) {
      document.querySelector(".slide").prepend(items[items.length - 1]);
    }
  };
  const toggleDialog = () => {
    setShowDialog(!showDialog);
  };

  return (
    <>
      <div className="hellow">
        <div className="up">
          <div className="desc">
            <h1 className="hea">AWARD WINNING</h1>
            <p className="para1">
              <b>DIGITAL MARKETING AGENCY</b>
            </p>
            <p className="para2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium deleniti similique minus magnam quidem sunt iure harum.
              Deserunt laboriosam amet animi tempora fugiat, error velit
              quisquam at illo optio autem. Placeat, culpa voluptatum quod
              exercitationem error quibusdam consectetur, cupiditate distinctio
              illum eum perferendis tempora maiores amet, ducimus ipsa
              consequatur asperiores esse quae tenetur facilis? Maiores iste
              dolorem natus unde quidem.
            </p>
            <button className="contact" onClick={toggleDialog}>
              {" "}
              CONTACT US
            </button>
          </div>
          <div
            className="photo"
            style={{
              backgroundImage: `url(${images[0]})`,
            }}
          ></div>
        </div>

        <div className="my">
          <div className="my1">
            <img src={myImag} alt="My Image" />
          </div>
          <div className="container">
            <div className="slide">
              <div
                className="item"
                style={{
                  backgroundImage: "url(https://i.ibb.co/qCkd9jS/img1.jpg)",
                }}
              >
                <div className="content">
                  <div className="name">Switzerland</div>
                  <div className="des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ab, eum!
                  </div>
                  <button onClick={openLink}>See More</button>
                </div>
              </div>
              <div
                className="item"
                style={{
                  backgroundImage: "url(https://i.ibb.co/jrRb11q/img2.jpg)",
                }}
              >
                <div className="content">
                  <div className="name">Finland</div>
                  <div className="des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ab, eum!
                  </div>
                  <button onClick={openLink}>See More</button>
                </div>
              </div>
              <div
                className="item"
                style={{
                  backgroundImage: "url(https://i.ibb.co/NSwVv8D/img3.jpg)",
                }}
              >
                <div className="content">
                  <div className="name">Iceland</div>
                  <div className="des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ab, eum!
                  </div>
                  <button onClick={openLink}>See More</button>
                </div>
              </div>
              <div
                className="item"
                style={{
                  backgroundImage: "url(https://i.ibb.co/Bq4Q0M8/img4.jpg)",
                }}
              >
                <div className="content">
                  <div className="name">Australia</div>
                  <div className="des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ab, eum!
                  </div>
                  <button onClick={openLink}>See More</button>
                </div>
              </div>
              <div
                className="item"
                style={{
                  backgroundImage: "url(https://i.ibb.co/jTQfmTq/img5.jpg)",
                }}
              >
                <div className="content">
                  <div className="name">Netherland</div>
                  <div className="des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ab, eum!
                  </div>
                  <button onClick={openLink}>See More</button>
                </div>
              </div>
              <div
                className="item"
                style={{
                  backgroundImage: "url(https://i.ibb.co/RNkk6L0/img6.jpg)",
                }}
              >
                <div className="content">
                  <div className="name">Ireland</div>
                  <div className="des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ab, eum!
                  </div>
                  <button onClick={openLink}>See More</button>
                </div>
              </div>
            </div>
            <div className="button">
              <button className="prev" onClick={handlePrev}>
                <GrLinkPrevious />
              </button>
              <button className="next" onClick={handleNext}>
                <GrLinkNext />
              </button>
            </div>
          </div>
        </div>
        <div className="third">
          <div className="third2">
            <div className="mypara3">WHY CHOOSE US</div>
            <div className="mypara4">
              <b>WHY WE ARE BEST</b>
            </div>
            <div className="myrow">
              <div className="s1">
                <img src={your1} alt="Your SVG Icon" width="150" height="90" />
                <div className="s11">
                  <b>Clarified vision& Target</b>
                </div>
                <div className="s12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, odio{" "}
                </div>
              </div>
              <div className="s2">
                <img src={your2} alt="Your SVG Icon" width="150" height="90" />
                <div className="s11">
                  <b>High performance</b>
                </div>
                <div className="s12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, odio{" "}
                </div>
              </div>
              <div className="s3">
                <img src={your3} alt="Your SVG Icon" width="150" height="90" />
                <div className="s11">
                  <b>Maintain Security</b>
                </div>
                <div className="s12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, odio{" "}
                </div>
              </div>
              <div className="s4">
                <img src={your4} alt="Your SVG Icon" width="150" height="90" />
                <div className="s11">
                  <b>Better Strategy & quality</b>
                </div>
                <div className="s12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, odio{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="mypara1">OUR PROJECT</div>
          <div className="mypara2">
            <b>WHY WE ARE BEST</b>
          </div>
          <div className="third1">
            <div
              className="imag"
              style={{
                backgroundImage: `url(${images[currentImage]})`,
              }}
            ></div>
            <div className="choose">
              <button
                className={`c1 ${currentImage === 0 ? "selected" : ""}`}
                onClick={() => setCurrentImage(0)}
              >
                <h2>why we are great </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </button>
              <button
                className={`c2 ${currentImage === 1 ? "selected" : ""}`}
                onClick={() => setCurrentImage(1)}
              >
                <h2>Genderless Kei -Japan's hot</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </button>
              <button
                className={`c3 ${currentImage === 2 ? "selected" : ""}`}
                onClick={() => setCurrentImage(2)}
              >
                <h2>Better strategy and quality </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </button>
            </div>
          </div>
        </div>

        <div className="forth">
          <div className="mypara5">EXPERTS GROWTH</div>
          <div className="mypara6">
            <b>OUR COMPANY GROWTH</b>
          </div>

          <div className="myrow2">
            <div className="p1">
              <img
                className="svgg"
                src={your1}
                alt="Your SVG Icon"
                width="30"
                height="30"
              />
              <h1 className="ggg">199 +</h1>
              <p className="p11">Satisfied customer</p>
            </div>
            <div className="p2">
              <img
                className="svgg"
                src={your2}
                alt="Your SVG Icon"
                width="30"
                height="30"
              />
              <h1 className="ggg">259 +</h1>
              <p className="p11">Days of operation</p>
            </div>
            <div className="p3">
              <img
                className="svgg"
                src={your3}
                alt="Your SVG Icon"
                width="30"
                height="30"
              />
              <h1 className="ggg">109 +</h1>
              <p className="p11">Complete Project</p>
            </div>
            <div className="p4">
              <img
                className="svgg"
                src={your4}
                alt="Your SVG Icon"
                width="30"
                height="30"
              />
              <h1 className="ggg">79 +</h1>
              <p className="p11">Win Awards</p>
            </div>
          </div>
          <div className="myrow3">
            <div className="mypara7">CLIENT'S FEEDBACK</div>
            <div className="mypara8">
              <b>PEOPLE SAY ABOUT US!</b>
            </div>
            <div className="mypara9">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              qui iure dicta voluptatem dolor sapiente soluta culpa repellendus
              t aut delectus quis aspernatur laboriosam nostrum fuga in
              obcaecati aliquid! Pariatur dolore unde reiciendis repudiandae
              commodi, aliquid enim magni.
            </div>
          </div>
          <div className="myrow4">
            <img src={myImage} alt="My Image" />
          </div>
        </div>
      </div>
      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <div className="dialog-content">
              <h2>Contact Us</h2>
              <form action="https://getform.io/f/jbwxdqma" method="POST">
                <div className="form-row">
                  <label htmlFor="workEmail">Work Email:</label>
                  <input
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="half">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                    />
                  </div>
                  <div className="half">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" required />
                  </div>
                </div>
                <div className="form-row">
                  <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    className="check"
                    required
                  />
                  <label className="lab1">
                    I agree to the terms and conditions
                  </label>
                </div>
                <div className="form-row">
                  <button type="submit">Submit</button>
                </div>
              </form>
              {/* Close dialog button */}
              <button className="close-btn" onClick={toggleDialog}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
