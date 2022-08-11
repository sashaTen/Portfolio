//link  to  the  resume
//https://lmpixels.com/demo/breezycv/dark/1/index.html#resume
import JobTitles from "./components/jobTitles";
import Contacts from "./components/contacts";
import AboutMe from "./components/about";
import MySkills from "./components/skills";
import Projects from "./components/expirience";
import { useState } from "react";

/*

  <AboutMe/>
      <MySkills/>
      <Contacts/>
      <Projects/>
*/

function App() {
  const [skills, setSkills] = useState(false);
  const [contacts, SetContacts] = useState(false);

  const [expirience, SetExpirience] = useState(false);

  const [education, SetEducation] = useState(false);

  let listOfDisplayedComponenst = [
    setSkills,
    SetContacts,
    SetEducation,
    SetExpirience
  ];

  function closeAllComponents() {
    for (let i = 0; i < listOfDisplayedComponenst.length; i++) {
      listOfDisplayedComponenst[i](false);
    }
  }
  return (
    <div className="App">
      <div className="menuHeader">
        <button
          onClick={() => {
            closeAllComponents();
            SetEducation(true);
          }}
          className="menuBtn"
        >
          about me
        </button>
        <button
          onClick={() => {
            closeAllComponents();
            setSkills(true);
          }}
          className="menuBtn"
        >
          {" "}
          my skills
        </button>
        <button
          onClick={() => {
            closeAllComponents();
            SetExpirience(true);
          }}
          className="menuBtn"
        >
          {" "}
          my projects
        </button>
        <button
          onClick={() => {
            closeAllComponents();
            SetContacts(true);
          }}
          className="menuBtn"
        >
          {" "}
          contacts
        </button>
      </div>

      <JobTitles />
      {contacts && <Contacts />}
      {skills && <MySkills />}
      {expirience && <Projects />}
      {education && <AboutMe />}
    </div>
  );
}

export default App;
