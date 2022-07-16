//phone ,  email ,  github  ,  linked id  , telegram
import {
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlinePhone,
  AiFillLinkedin
} from "react-icons/ai";
import { BsTelegram, BsInstagram } from "react-icons/bs";
const Contacts = () => {
  return (
    <>
      <div className="contactContainer">
        <div className="blackBack"></div>
        <section className="contacts">
          <div className="contactHeader">contact me</div>
          <div className="contactIconsContainer">
            <AiOutlineMail className="emailIcon" />
            <AiOutlineGithub className="emailIcon" />
            <AiOutlinePhone className="emailIcon" />
            <AiFillLinkedin className="emailIcon" />
            <BsTelegram className="emailIcon" />
            <BsInstagram className="emailIcon" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Contacts;
