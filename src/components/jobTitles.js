import { useState } from "react";

const JobTitles = (props) => {
  const [textEffectClass, SETtextEffectClass] = useState({});
  const [textEffectClass2, SETtextEffectClass2] = useState({});
  const [textEffectClass3, SETtextEffectClass3] = useState({});
  const [textEffectClass4, SETtextEffectClass4] = useState({});

  const blurred = props.blurState;
  const effectAttributes = {
    opacity: "1",
    position: "relative",
    left: "0%"
  };

  function displayText(time) {
    setTimeout(() => {
      SETtextEffectClass(effectAttributes);
    }, 500);
    setTimeout(() => {
      SETtextEffectClass2(effectAttributes);
    }, 700);
    setTimeout(() => {
      SETtextEffectClass3(effectAttributes);
    }, 1000);
    setTimeout(() => {
      SETtextEffectClass4(effectAttributes);
    }, 1200);
  }
  displayText();

  //    filter: blur(15px);
  return (
    <div className="mainContainer">
      <div className="jobTitleContainer" style={blurred}>
        <h1 style={textEffectClass}>hello </h1>
        <h1 style={textEffectClass2}>i am ten alexander</h1>
        <h1 style={textEffectClass3}>i am web developer</h1>
        <h1 style={textEffectClass4}>and ux/ui designer</h1>
      </div>
    </div>
  );
};

export default JobTitles;
