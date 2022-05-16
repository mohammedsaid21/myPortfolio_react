import React from "react";
import Img1 from "../../assets/6.jpg";
import Img2 from "../../assets/myWork (2).jpg";
import Img3 from "../../assets/3.jpg";
import Img4 from "../../assets/4.jpg";
import Img5 from "../../assets/5.jpg";
import Img6 from "../../assets/1.jpg";
import Img7 from "../../assets/2.jpg";
import Img8 from "../../assets/8.jpg";
import "./portfolio.css";

const Portfolio = () => {
  const data = [
    {
      title: "Platform Education (علمني)",
      image: Img6,
      github: "https://github.com/mohammedsaid21",
      liveDemo: "https://react-platform-educational.web.app",
    },
    {
      title: "This is a Big E-Commerce",
      image: Img7,
      github:
        "https://github.com/mohammedsaid21/eCommerce-web-site-with-react-redux-FakeApi",
      liveDemo: "https://zen-newton-b69e84.netlify.app",
    },
    {
      title: "Site Company In Internet",
      image: Img3,
      github: "https://github.com/mohammedsaid21/ElQemaCompany",
      liveDemo: "https://mohammedsaid21.github.io/ElQemaCompany",
    },
    {
      title: "Page By Js Pure",
      image: Img4,
      github:
        "https://github.com/mohammedsaid21/Website-Html-Css-and-JavaScript-",
      liveDemo:
        "https://mohammedsaid21.github.io/Website-Html-Css-and-JavaScript-/",
    },
    {
      title: "Memory Game React App",
      image: Img8,
      github: "https://github.com/mohammedsaid21",
      liveDemo: "https://mohammed-memory-game.web.app",
    },
    {
      title: "This is a small e-commerce",
      image: Img2,
      github: "https://github.com/mohammedsaid21",
      liveDemo: "https://zen-newton-b69e84.netlify.app",
    },
    {
      title: "Restaurant Website",
      image: Img5,
      github: "https://github.com/mohammedsaid21/",
      liveDemo: "https://cranky-visvesvaraya-a15c41.netlify.app",
    },
    {
      title: "Restaurant Website",
      image: Img1,
      github: "https://github.com/mohammedsaid21/",
      liveDemo: "https://react-food-restaurant.web.app",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2 className="headerPortfolio"> &#x276C; Portfolio&#x27B6;&#x276D;</h2>

      <div className="container portfolio_container">
        {data.map((el, i) => (
          <article key={i} className="portfolio_item">
            <div className="portfolio_item_image">
              <img src={el.image} alt="" />
            </div>{" "}
            <h3>{el.title}</h3>
            <a
              href={el.github}
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href={el.liveDemo}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </article>
        ))}
      </div>


    </section>
  );
};

export default Portfolio;

{
  /* <h3>Languages and Tools:</h3>
<div>
<img align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" style="max-width:100%;">
 
 <img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" style="max-width:100%;">
 
 <img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" style="max-width:100%;">
 
 <img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" style="max-width:100%;">
 
 <img align="left" height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png">  
  <img align="left" height="20" src="https://img.icons8.com/officel/452/react.png"> 
 <img align="left" alt="HTML5" width="35px"     src="https://img.icons8.com/color/344/redux.png" />
 
 <img align="left" alt="Sass" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" />

 <img align="left" alt="HTML5" width="35px"     src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tailwind/tailwind.png" />
 
<img align="left" alt="GitHub" width="26px" src="https://img.icons8.com/color/452/material-ui.png" style="max-width:100%;">
 
<img align="left" alt="HTML5" width="35px" src="https://img.icons8.com/color/344/google-firebase-console.png" />
 
<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" style="max-width:100%;">
 
</div> */
}
