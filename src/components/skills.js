// ,  dsa   ,    redux
//sass   ,    bootstrap ,  git   &  github ,  npm
import { SiRedux } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
import {
  DiHtml5,
  DiNpm,
  DiSass,
  DiDatabase,
  DiBootstrap,
  DiReact,
  DiCss3Full,
  DiJavascript1
} from "react-icons/di";
const MySkills = () => {
  return (
    <>
      <div className=" skillContainer ">
        <div className="blackBack"></div>
        <div className="contactHeader">skills</div>
        <div className="contactIconsContainer skillGrid">
          <div className="skillNameIcon">
            <p>html</p>
            <DiHtml5 className="contactIcon" />
          </div>
          <div className="skillNameIcon">
            <p>css</p>
            <DiCss3Full className="contactIcon" />
          </div>
          <div className="skillNameIcon">
            <p>javascript</p>
            <DiJavascript1 className="contactIcon" />
          </div>
          <div className="skillNameIcon">
            <p>react</p>
            <DiReact className="contactIcon" />
          </div>
          <div className="skillNameIcon">
            <p>redux</p>
            <SiRedux className="contactIcon" />
          </div>
          <div className="skillNameIcon">
            <p>github</p>
            <AiOutlineGithub className="contactIcon" />
          </div>
          <div className="skillNameIcon">
            <p>npm</p>
            <DiNpm className="contactIcon" />
          </div>
          <div className="skillNameIcon">
            <p>sass</p>
            <DiSass className="contactIcon" />
          </div>
          <div className="skillNameIcon">
            <p>bootstrap</p>
            <DiBootstrap className="contactIcon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;
