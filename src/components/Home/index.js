import React from "react";
import "./index.css";

export default function Home() {
  return (
    <div>
      <h2 className="main-header">
        Welcome To my Eq-Xpro
        <br />
        Hi-tech Solution for your full stack development!!!!
        <br />
      </h2>
      <footer>
        <div className="xpo" style={{ color: "green" }}>
          E-Expert
        </div>
        <div className="xpo" style={{ color: "yellow" }}>
          Q-Quality
        </div>
        <div className="xpo" style={{ color: "red" }}>
          X-Xtra{" "}
        </div>{" "}
        <div className="xpo" style={{ color: "#e6e6" }}>
          P-Professional
        </div>{" "}
        <div className="xpo" style={{ color: "pink" }}>
          R-Review
        </div>{" "}
        <div className="xpo" style={{ color: "gold" }}>
          O-Organization
        </div>
      </footer>
    </div>
  );
}
