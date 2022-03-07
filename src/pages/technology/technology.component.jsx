import { useEffect, useState } from "react";
import data from "../../data";
import "./technology.style.scss";
import React from "react";

const Technology = () => {
  const tech = data.technology;
  const [counter, setCounter] = useState(0);
  const singleTech = tech[counter];

  const techSwitch = (e) => {
    const id = e.target.id;
    setCounter(id);
  };

  useEffect(() => {
    const btns = document.getElementsByClassName("btn");
    for (let i = 0; i < btns.length; i++) {
      if (parseInt(btns[i].id) === parseInt(counter)) {
        btns[i].classList.add("active");
      } else {
        btns[i].classList.remove("active");
      }
    }
  }, [counter, tech]);

  return (
    <div className="technologyPage">
      <div className="technology">
        <div className="technology__header">
          <h1>
            <span>03</span> space launch 101
          </h1>
        </div>

        <div className="tech">
          <div className="left">
            <div className="tech__id">
              <button onClick={techSwitch} className="btn" id="0">
                1
              </button>
              <button onClick={techSwitch} className="btn" id="1">
                2
              </button>
              <button onClick={techSwitch} className="btn" id="2">
                3
              </button>
            </div>
            <div className="tech__details">
              <p className="tech__details--header">the terminology...</p>
              <h1 className="tech__details--name">{singleTech.name}</h1>
              <p className="tech__details--description">
                {singleTech.description}
              </p>
            </div>
          </div>

          <div className="tech__image">
            <img
              src={
                window.screen.width > 768
                  ? singleTech.images.portrait
                  : singleTech.images.landscape
              }
              alt={singleTech.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
