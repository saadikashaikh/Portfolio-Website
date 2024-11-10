/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/keyboard.jpg";

const imageAltText = "Keyboard & mouse background";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Spotify Clone",
    description:
      "A responsive web application replicating key features and layout of Spotify, designed using HTML, CSS, and Bootstrap. This project showcases a user-friendly music streaming interface, with interactive elements like play/pause controls, volume adjustment, and track progress visualization.",
    url: "https://saadikashaikh.github.io/Spotify-Clone/",
  },
  {
    title: "Country Info Finder",
    description:
      "An informative web app that retrieves detailed data about any country, including Official name, Common name, Population and Capitals. Built using JavaScript and the Rest Countries API, this project emphasizes clean, structured data presentation and efficient API integration.",
    url: "https://saadikashaikh.github.io/Country-Info-Finder-Exercise/",
  },
  {
    title: "Weather Application Website",
    description:
      "A dynamic weather forecasting website where users can search for any city to view current weather conditions, including temperature, humidity, and an icon representing the weather. Powered by JavaScript and the WeatherAPI, this project integrates real-time data and showcases how external APIs can enhance a website's functionality.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
