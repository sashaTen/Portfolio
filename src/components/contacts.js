//phone ,  email ,  github  ,  linked id  , telegram
import { AiOutlineMail } from "react-icons/ai";
const Contacts = () => {
  return (
    <>
      <div className="contactContainer">
        <div className="blackBack"></div>
        <section className="contacts">
          <div className="contactHeader">contact me</div>
          <div className="contactIconsContainer">
            <AiOutlineMail className="emailIcon" />
            <AiOutlineMail className="emailIcon" />
            <AiOutlineMail className="emailIcon" />
            <AiOutlineMail className="emailIcon" />
            <AiOutlineMail className="emailIcon" />
            <AiOutlineMail className="emailIcon" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Contacts;
