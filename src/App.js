import JobTitles from "./components/jobTitles";
import Contacts from "./components/contacts";
import AboutMe from "./components/about";
import MySkills from "./components/skills";
import Projects from "./components/expirience";
import { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";

function App() {
  const [textEffectClass, SETtextEffectClass] = useState({});
  const [textEffectClass2, SETtextEffectClass2] = useState({});
  const [textEffectClass3, SETtextEffectClass3] = useState({});
  const [textEffectClass4, SETtextEffectClass4] = useState({});
  const [blur, setBlur] = useState({});
  const [skills, setSkills] = useState(false);
  const [contacts, SetContacts] = useState(false);
  const [displayHeader, seTdisplayHeader] = useState({ display: "none" });
  const [expirience, SetExpirience] = useState(false);
  const [displayMenu, seTdisplayMenu] = useState("menuIcon");
  const [education, SetEducation] = useState(false);

  let listOfDisplayedComponenst = [
    setSkills,
    SetContacts,
    SetEducation,
    SetExpirience
  ];

  const effectAttributes = {
    opacity: "1",
    position: "relative",
    left: "0%"
  };
  function displayText() {
    setTimeout(() => {
      SETtextEffectClass(effectAttributes);
    }, 500);
    setTimeout(() => {
      SETtextEffectClass2(effectAttributes);
    }, 900);
    setTimeout(() => {
      SETtextEffectClass3(effectAttributes);
    }, 1200);
    setTimeout(() => {
      SETtextEffectClass4(effectAttributes);
    }, 1500);
  }

  function closeAllComponents() {
    for (let i = 0; i < listOfDisplayedComponenst.length; i++) {
      listOfDisplayedComponenst[i](false);
    }
  }

  return (
    <div className="App">
      <AiOutlineMenuUnfold
        onClick={() => {
          displayText();
          seTdisplayHeader({ display: "flex" });
          seTdisplayMenu("displayNone");
        }}
        className={displayMenu}
      />
      <div style={displayHeader} className="menuHeader">
        <span
          onClick={() => {
            closeAllComponents();
            SetEducation(true);
            setBlur({ filter: "blur(15px)" });
          }}
          className="menuBtn"
          style={textEffectClass}
        >
          about me
        </span>
        <span
          onClick={() => {
            closeAllComponents();
            setSkills(true);
            setBlur({ filter: "blur(15px)" });
          }}
          className="menuBtn"
          style={textEffectClass2}
        >
          {" "}
          my skills
        </span>
        <span
          onClick={() => {
            closeAllComponents();
            SetExpirience(true);
            setBlur({ filter: "blur(15px)" });
          }}
          className="menuBtn"
          style={textEffectClass3}
        >
          {" "}
          my projects
        </span>
        <span
          onClick={() => {
            closeAllComponents();
            SetContacts(true);
            setBlur({ filter: "blur(15px)" });
          }}
          className="menuBtn"
          style={textEffectClass4}
        >
          {" "}
          my contacts
        </span>
        <span
          onClick={() => {
            seTdisplayHeader({ display: "none" });
            seTdisplayMenu("menuIcon");
            closeAllComponents();
            setBlur({});
          }}
          className="closeMenu"
        >
          X
        </span>
      </div>

      <JobTitles blurState={blur} />
      {contacts && <Contacts />}
      {skills && <MySkills />}
      {expirience && <Projects />}
      {education && <AboutMe />}
    </div>
  );
}

export default App;
