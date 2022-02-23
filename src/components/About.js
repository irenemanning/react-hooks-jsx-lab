import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>So much to say about Liza. A cool gal she is. </p>
    <img src={image} alt="I made this" ></img>
  </div>
  )
}

export default About;
