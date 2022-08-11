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

  return (
    <div className="App">
      <div className="menuHeader">
        <button
          onClick={() => {
            SetEducation(!education);
          }}
          className="menuBtn"
        >
          about me
        </button>
        <button
          onClick={() => {
            setSkills(!skills);
          }}
          className="menuBtn"
        >
          {" "}
          my skills
        </button>
        <button
          onClick={() => {
            SetExpirience(!expirience);
          }}
          className="menuBtn"
        >
          {" "}
          my projects
        </button>
        <button
          onClick={() => {
            SetContacts(!contacts);
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
