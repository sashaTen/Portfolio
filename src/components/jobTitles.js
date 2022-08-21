import { useState } from "react";

const JobTitles = (props) => {
  const [textEffectClass, SETtextEffectClass] = useState({});
  const blurred = props.blurState;
  const effectAttributes = {
    opacity: "1",
    position: "relative",
    left: "0%"
  };

  setTimeout(() => {
    SETtextEffectClass(effectAttributes);
  }, 500);
  //    filter: blur(15px);
  return (
    <div className="mainContainer">
      <div className="jobTitleContainer" style={blurred}>
        <h1 style={textEffectClass}>hello </h1>
        <h1 style={textEffectClass}>i am ten alexander</h1>
        <h1 style={textEffectClass}>i am web developer</h1>
        <h1 style={textEffectClass}>and ux/ui designer</h1>
      </div>
    </div>
  );
};

export default JobTitles;
