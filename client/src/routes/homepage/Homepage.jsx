import { useState } from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");



  return (
    <div className="homepage">
      <img src="/orbital.png" className="orbital" />
      <div className="left">
        <h1>Artsy AI</h1>
        <h2>Determine style of the art</h2>
        <h3>Why waste time on thinking when we are here for you..!</h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "bot.png"
              }
              className=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Human: Uploaded - art.png",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: This image belongs to style Romanticism",
                2000,
                () => {
                  setTypingStatus("Human2");
                },
                "Human: Uploaded - art1.jpeg",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:This art is of style conceptual  art",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
