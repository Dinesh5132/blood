"use client";
import React, { useState } from "react";
import "../CSS/MovingBlood.css";

const MovingBlood = () => {
  const BLOOD_TYPES = {
    "O−": ["O−", "O+", "A−", "A+", "B−", "B+", "AB−", "AB+"],
    "O+": ["O+", "A+", "B+", "AB+"],
    "A−": ["A−", "A+", "AB−", "AB+"],
    "A+": ["A+", "AB+"],
    "B−": ["B−", "B+", "AB−", "AB+"],
    "B+": ["B+", "AB+"],
    "AB−": ["AB−", "AB+"],
    "AB+": ["AB+"],
  };

  const [lastCalled, setLastCalled] = useState(null);
  const [bloodBagHeight, setBloodBagHeight] = useState("100px");
  const [centerViaHeight, setCenterViaHeight] = useState("0px");
  const [bloodViasWidth, setBloodViasWidth] = useState(Array(8).fill("0px"));
  const [highlightedBloodTypes, setHighlightedBloodTypes] = useState(
    Array(8).fill(false)
  );

  const reset = () => {
    setLastCalled(null);
    setBloodBagHeight("100px");
    setCenterViaHeight("0px");
    setBloodViasWidth(Array(8).fill("0px"));
    setHighlightedBloodTypes(Array(8).fill(false));
  };

  const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const setRecipients = async (e) => {
    const donor = e.target.innerText;
    const newBloodViasWidth = Array(8).fill("0px");
    const newHighlightedBloodTypes = Array(8).fill(false);

    for (let item of BLOOD_TYPES[donor]) {
      const recipientIndex = Object.keys(BLOOD_TYPES).indexOf(item);
      const height = 50 + 50 * Math.floor(recipientIndex / 2);
      const bloodHeight = 125 - 25 * Math.floor(recipientIndex / 2);

      setBloodBagHeight(`${bloodHeight}px`);
      setCenterViaHeight(`${height}px`);

      await timeout(100);

      newBloodViasWidth[recipientIndex] = "100%";
      newHighlightedBloodTypes[recipientIndex] = true;
    }

    setBloodViasWidth(newBloodViasWidth);
    setHighlightedBloodTypes(newHighlightedBloodTypes);
    setLastCalled(e);
  };

  const handleClick = (e) => {
    if (lastCalled) reset();
    if (e.target !== e.currentTarget) setRecipients(e);
  };

  return (
    <div className="blood-bank-main-table">
      <div id="content">
        <h3 className="blood0bank-main-table-h3">
          Select the donor blood type:
        </h3>
        <div id="blood_selector" onClick={handleClick}>
          {Object.keys(BLOOD_TYPES).map((type) => (
            <div
              key={type}
              className={
                lastCalled && lastCalled.target.innerText === type
                  ? "highlight"
                  : ""
              }
            >
              {type}
            </div>
          ))}
        </div>
        {/* mobile-view */}
        <div className="moving-blood-mobile-view"></div>
        <div id="blood_content">
          <div className="bar"></div>
          <div className="main_bag">
            <div className="blood" style={{ height: bloodBagHeight }}></div>
          </div>
        </div>
        <div id="center_via_c">
          <div className="center_via">
            <div
              className="blood_via"
              style={{ height: centerViaHeight }}
            ></div>
          </div>
        </div>
        <div id="humans">
          {Object.keys(BLOOD_TYPES).map((type, index) => (
            <div
              key={index}
              className={`human ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="scribble">
                <span
                  className={
                    highlightedBloodTypes[index] ? "highlightText" : ""
                  }
                >
                  {type}
                </span>
                <div className="head"></div>
                <div className="body"></div>
              </div>
              <div className="via"></div>
              <div
                className="blood_via"
                style={{ width: bloodViasWidth[index] }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      {/* <button id="reset" onClick={reset}>
        Reset
      </button> */}
    </div>
  );
};

export default MovingBlood;
