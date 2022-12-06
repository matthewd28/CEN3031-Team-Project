import React from "react";
import "./Home.css"

function Home() {
  return (
    <div className="home">\
      <div className="homeBanner">
        <div className="headers">
          <h1 className="mainheader">Welcome to ChariTables!</h1>
          <h2 className="subheader">Keep track of what you give back</h2>
        </div>
      </div>
      <div className="backdrop"></div>
      <div className="contentContainer">
        <div className="contentElement social">
          <img className="svgImage" src="/images/donate.svg"></img>
          <p className="imageLabel">Log your donations</p>
          <p className="imageSubLabel">
            Don't miss that payment! Keep track of what you've 
            given over the years and continue to make an impact
          </p>
        </div>
        <div className="contentElement donateElement">
          <img className="svgImage" src="/images/social.svg"></img>
          <p className="imageLabel">Let people know</p>
          <p className="imageSubLabel">
            Found a great cause to help? Or maybe looking for one?
            See how other people are giving back to their communities.
          </p>
        </div>
        <div className="contentElement hours">
          <img className="svgImage" src="/images/volunteer.svg"></img>
          <p className="imageLabel">Log your hours</p>
          <p className="imageSubLabel">
            Need community service hours to gradute? ChariTables is 
            here to help you stay on track and meet your goals!
          </p>
        </div>
      </div>
    </div>
    
  );
}

export default Home;
