import React from "react";
import aboutImg from "../images/about.jpeg";
import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="" />
        </div>

        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores est
            aliquam eveniet obcaecati laborum labore! Nam magnam enim eveniet
            pariatur, dolorem nobis fugiat esse reprehenderit, numquam repellat,
            quas minus explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, aut
            minima ab repudiandae provident incidunt debitis repellendus?
            Reiciendis beatae fuga libero dolorem sapiente? In nesciunt incidunt
            vel eum odit! Quod!
          </p>
          <a href="#" className="btn">
            Daha Fazla
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
