import { useState, useEffect } from "react";
import data from "../../data";
import "./crew.style.scss";

const Crew = () => {
  const crew = data.crew;
  const [counter, setCounter] = useState(0);
  const member = crew[counter];

  function memSwitch(e) {
    const id = e.target.id;
    setCounter(id);
  }

  useEffect(() => {
    const btns = document.getElementsByClassName("btn");
    for (let i = 0; i < btns.length; i++) {
      if (parseInt(btns[i].id) === parseInt(counter)) {
        btns[i].classList.add("active");
      } else {
        btns[i].classList.remove("active");
      }
    }
    // btns.map((btn) => {
    //   console.log(btn);
    // });
  }, [counter]);

  return (
    <div className="crewPage">
      <div className="crewMember">
        <div className="left">
          <h1 className="crewPage__header">
            <span>02</span> meet the crew
          </h1>
          <div className="member">
            <div className="member__role">{member.role}</div>
            <div className="member__name">{member.name}</div>
            <div className="member__bio">{member.bio}</div>
          </div>
          <div className="member__btns">
            <button className="btn" id="0" onClick={memSwitch}></button>
            <button className="btn" id="1" onClick={memSwitch}></button>
            <button className="btn" id="2" onClick={memSwitch}></button>
            <button className="btn" id="3" onClick={memSwitch}></button>
          </div>
        </div>
        <div className="right">
          <img src={member.images.png} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Crew;
